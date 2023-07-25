import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
const UserMenu = () => {
  return (
    <div className="text-center dashboard-menu " style={{ width: "100%" }}>
      <div className="list-group">
        <h4>Dashboard</h4>
        <NavLink
          to="/dashboard/user"
          className="list-group-item list-group-item-action menuBtn"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action menuBtn"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action menuBtn"
        >
          Orders
        </NavLink>
      </div>
    </div>
  );
};

export default UserMenu;
