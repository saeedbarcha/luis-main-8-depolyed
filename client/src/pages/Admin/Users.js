import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <AdminMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <h3 className="text-center">All Users</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
