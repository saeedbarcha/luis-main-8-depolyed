import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/orders");
      setOrders(data);
      console.log("data", data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <UserMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <h1 className="text-center">All Orders</h1>
            {orders?.length > 0 ? (
              <>
               {orders?.map((o, i) => {
              return (
                <div className="row border shadow d-flex justify-content-center">
                  <table className="table border">
                    <thead className="d-sm-block d-md-none">
                      <tr>
                        <p style={{ fontWeight: "bold" }}>
                          S.No :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {i + 1}
                          </span>
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          Status :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {o?.status}
                          </span>
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          Buyer :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {o?.buyer?.name}
                          </span>
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          date :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {moment(o?.createAt).fromNow()}
                          </span>
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          Payment :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {o?.payment?.success ? "Success" : "Failed"}
                          </span>
                        </p>
                        <p style={{ fontWeight: "bold" }}>
                          Quantity :
                          <span
                            className="orderStatusHeadings"
                            style={{ color: "#e98337" }}
                          >
                            {o?.products?.length}
                          </span>
                        </p>
                      </tr>
                    </thead>

                    <thead className="d-md-block d-none">
                      <tr className="">
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                      <tr className="">
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </thead>
                  </table>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    {o?.products?.map((p, i) => (
                      <div
                        className="row card flex-row mt-2 mb-2 pt-2"
                        key={i}
                        style={{ width: "100%" }}
                      >
                        <div className="col-md-3">
                          <img
                            src={`/api/v1/product/product-photo/${p?._id}`}
                            className="card-img-top"
                            alt="product image"
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p?.name}</p>
                          <p>{p?.description?.substring(0, 30)}</p>
                          <p>Price : {p?.price}$</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
              </>
              
              ) : (
               <>
                <h5 className="text-center">There is no any order in your order queue</h5>
               </>
              )}
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
