import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/order/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `/api/v1/order/order-status/${orderId}`,
        {
          status: value,
        }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <AdminMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <h3 className="text-center">All Orders</h3>
            {orders?.length > 0 ? (
              <>
                {orders?.map((o, i) => {
                  return (
                    <div className="m-auto border shadow" key={i}>
                      <table className="table">
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
                                <Select
                                  bordered={false}
                                  onChange={(value) =>
                                    handleChange(o?._id, value)
                                  }
                                  defaultValue={o?.status}
                                  style={{ color: "#e98337" }}
                                >
                                  {status?.map((s, i) => (
                                    <Option key={i} value={s}>
                                      {s}
                                    </Option>
                                  ))}
                                </Select>
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
                            <td>
                              <Select
                                bordered={false}
                                onChange={(value) =>
                                  handleChange(o?._id, value)
                                }
                                defaultValue={o?.status}
                              >
                                {status?.map((s, i) => (
                                  <Option key={i} value={s}>
                                    {s}
                                  </Option>
                                ))}
                              </Select>
                            </td>
                            <td>{o?.buyer?.name}</td>
                            <td>{moment(o?.createAt).fromNow()}</td>
                            <td>
                              {o?.payment?.success ? "Success" : "Failed"}
                            </td>
                            <td>{o?.products?.length}</td>
                          </tr>
                        </thead>
                      </table>
                      <div className="container">
                        {o?.products?.map((p, i) => (
                          <div className="row mb-2 p-3 card flex-row" key={i}>
                            <div className="col-md-4">
                              <img
                                src={`/api/v1/product/product-photo/${p?._id}`}
                                className="card-img-top"
                                alt={p?.name}
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

export default AdminOrders;
