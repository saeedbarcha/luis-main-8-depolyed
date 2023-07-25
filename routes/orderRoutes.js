import express from "express";
import {
  braintreeTokenController,
  brainTreePaymentController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getOrdersStatusCount,
} from "../controllers/orderController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

// get orders count
// router.get("/count", requireSignIn, getOrdersStatusCount);
router.get("/count",  getOrdersStatusCount);


export default router;
