import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const AdminMenu = () => {
  return (
    <>
      <div className="list-group dashboard-menu" style={{ width: "100%" }}>
        <h3 className="text-center">Admin Panel</h3>
        <NavLink
          to="/dashboard/admin"
          className="list-group-item list-group-item-action menuBtn"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item list-group-item-action menuBtn"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item list-group-item-action menuBtn"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item list-group-item-action menuBtn"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item list-group-item-action menuBtn"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item list-group-item-action menuBtn"
        >
          Users
        </NavLink>
      </div>
    </>
  );
};

export default AdminMenu;
