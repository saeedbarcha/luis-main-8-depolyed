import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import useCategory from "../../../hooks/useCategory";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";
import logo from "./images/logo.png";
import "./Header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const response = await axios.get("/api/v1/order/count");
        const { count } = response.data;
        setCount(count);
      } catch (error) {
        console.error("Error while fetching order count:", error);
      }
    };

    fetchOrdersCount();
  }, []);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <header className="headerCont">
      <nav className="navbar navbar-expand-lg bg-body-tertiary  m-0 fixed-top navBar">
        <div className="container-fluid ">
          <Link to="/" className="logoAndNameCont">
            <div className="d-flex align-items-center">
              <img src={logo} style={{ width: "40px" }} alt="Main logo image" />
              <span className="brandNameHeader">Lubick</span>
            </div>
          </Link>
          <button
            className="navbar-toggler navbarToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <SearchInput />
              <li className="navItem">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navItem dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu innerDropdownMenu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c, index) => (
                    <li key={index}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="navItem">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="navItem dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </Link>
                    <ul className="dropdown-menu innerDropdownMenu">
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/dashboard/user/profile`}
                          className="dropdown-item"
                        >
                          Profile Setting
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}

              {auth?.user?.role === 1 ? (
                <li className="navItem">
                  <NavLink to="/dashboard/admin/orders" className="nav-link">
                    <Badge count={count} showZero offset={[10, -5]}>
                      Orders
                    </Badge>
                  </NavLink>
                </li>
              ) : (
                <li className="navItem">
                  <NavLink to="/cart" className="nav-link">
                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                      Cart
                    </Badge>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
