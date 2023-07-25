import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import braintree from "braintree";
import dotenv from "dotenv";
import { sendOrderEmailAdmin } from "../utils/sendOrderEmailAdmin.js"; // Import the modified email utility
import { orderConfMail } from "../utils/orderConfMail.js"; 
import { orderStatusMail } from "../utils/orderStatusMail.js"; 

dotenv.config();

//payment gateway

var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

//payment gateway api
//token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(response);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

// check payment create new order
export const brainTreePaymentController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { nonce, cart } = req.body;
    let total = 0;
    cart.map((i) => {
      total += i.price;
    });
    let newTransaction = gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },

      async function (error, result) {
        if (result) {
          const order = new orderModel({
            products: cart,
            payment: result,
            buyer: req.user._id,
          }).save();
          if (order) {
            let userData = await userModel.findById({ _id: userId });
            sendOrderEmailAdmin(userData);
            orderConfMail(userData);

            res.status(200).json({ ok: true });
          }
        } else {
          res.status(500).send(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
      res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Geting Orders",
      error,
    });
  }
};

//get order count number
export const getOrdersStatusCount = async (req, res) => {
  try {
    const count = await orderModel.countDocuments({ status: "Not Process" });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting order count",
      error,
    });
  }
};

//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
      res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status , updatedAt: Date.now() },
      { new: true }
    );

    const userDetails = await userModel.findById({_id:orders.buyer})
    if(orders){
      orderStatusMail(status, userDetails)
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};
