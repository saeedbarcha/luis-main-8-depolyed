import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import {
  MdOutlineProductionQuantityLimits,
  MdManageAccounts,
} from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { GiVineWhip, GiAchillesHeel } from "react-icons/gi";
import { CiPercent } from "react-icons/ci";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import { useAuth } from "../../../context/auth";
import { useCart } from "../../../context/cart";
import toast from "react-hot-toast";
import "./SideBar.css";

const SideBarAll = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const [count, setCount] = useState("0");

  useEffect(() => {
    const fetchOrdersCount = async () => {
      try {
        const response = await axios.get("/api/v1/order/count");
        const { count } = response?.data;
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

  const svgStyle = {
    width: "25px",
    height: "25px",
    color: "#e98337",
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="sidebarAll mt-5 mt-lg-0">
        <Link to="/" className="sideBarLinks">
          <div className="boxAll" onClick={refreshPage}>
            <div>
              <HiRefresh style={svgStyle} />
            </div>
            <span>Refersh</span>
          </div>
        </Link>

        <Link to="/" className="sideBarLinks">
          <div className="boxAll">
            <div>
              <AiFillHome style={svgStyle} />
            </div>
            <span>Home</span>
          </div>
        </Link>

        {auth?.user?.role === 1 ? (
          <>
            <Link to="/dashboard/admin/orders" className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <FaShoppingCart style={svgStyle} />
                </div>
                <div className="innerBadgeBoxAll">
                  <span>Orders</span>
                  <div className="countBadge">{count}</div>
                </div>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/cart" className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <FaShoppingCart style={svgStyle} />
                </div>
                <div className="innerBadgeBoxAll">
                  <span>Cart</span>
                  <div className="countBadge">{cart?.length}</div>
                </div>
              </div>
            </Link>
          </>
        )}

        <Link to={`/`} className="sideBarLinks">
          <div className="boxAll">
            <div>
              <GiVineWhip style={svgStyle} />
            </div>
            <span>New Arrivals</span>
          </div>
        </Link>

        <Link to={`/`} className="sideBarLinks">
          <div className="boxAll">
            <div>
              <CiPercent style={svgStyle} />
            </div>
            <span>Big Discounts</span>
          </div>
        </Link>

        <Link to="/categories" className="sideBarLinks">
          <div className="boxAll">
            <div>
              <MdOutlineProductionQuantityLimits style={svgStyle} />
            </div>
            <span>Products</span>
          </div>
        </Link>

        <Link to="/categories" className="sideBarLinks">
          <div className="boxAll">
            <div>
              <MdOutlinePhotoCameraBack style={svgStyle} />
            </div>
            <span>Gallery</span>
          </div>
        </Link>

        <Link to="/categories" className="sideBarLinks">
          <div className="boxAll">
            <div>
              <BiCategoryAlt style={svgStyle} />
            </div>
            <span>Blogs</span>
          </div>
        </Link>

        <Link to={`/`} className="sideBarLinks">
          <div className="boxAll">
            <div>
              <GiAchillesHeel style={svgStyle} />
            </div>
            <span>Achivements</span>
          </div>
        </Link>

        {!auth?.user ? (
          <>
            <Link to="/register" className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <RiAccountPinBoxFill style={svgStyle} />
                </div>
                <span>Register</span>
              </div>
            </Link>

            <Link to="/login" className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <AiOutlineLogin style={svgStyle} />
                </div>
                <span>Login</span>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              className="sideBarLinks"
            >
              <div className="boxAll">
                <div>
                  <BiCategoryAlt style={svgStyle} />
                </div>
                <span>Dashboard</span>
              </div>
            </Link>

            <Link to={`/dashboard/user/profile`} className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <MdManageAccounts style={svgStyle} />
                </div>
                <span>Profile Settings</span>
              </div>
            </Link>

            <Link onClick={handleLogout} to={`/login`} className="sideBarLinks">
              <div className="boxAll">
                <div>
                  <AiOutlineLogout style={svgStyle} />
                </div>
                <span>Logout</span>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SideBarAll;
