import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "./style.css";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <AdminMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <div className="card m-auto w-75 p-3">
              <h2 className="text-center">Admin Details</h2>
              <h6>
                {" "}
                Admin Name :{" "}
                <span style={{ fontSize: "15px" }}> {auth?.user?.name}</span>
              </h6>
              <h6>
                {" "}
                Admin Email :{" "}
                <span style={{ fontSize: "15px" }}>
                  {auth?.user?.email}
                </span>{" "}
              </h6>
              <h6>
                {" "}
                Admin Contact :{" "}
                <span style={{ fontSize: "15px" }}>
                  {auth?.user?.phone}
                </span>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
