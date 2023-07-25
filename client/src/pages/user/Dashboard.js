import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <UserMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <div className="card m-auto w-75 p-3">
              <h2 className="text-center">User Details</h2>
              <h6>{auth?.user?.name}</h6>
              <h6>{auth?.user?.email}</h6>
              <h6>{auth?.user?.address}</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
