import React from "react";
import "./style.css";
import { FaGooglePlay } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutUs = () => {
    navigate("/about");
  };

  const handlePolicy = () => {
    navigate("/policy");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const googlePlayStyle = {
    width: "30px",
    height: "30px",
  };

  const playStyle = {
    width: "30px",
    height: "30px",
  };

  return (
    <>
      <footer className="footerCont">
        <div className="container-fluid grid2">
          <div className="row">
            <div className="col-12  text-center">
              <h1 style={{ color: "#e98337" }}>LUBICK</h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Auctor libero id
                et, in gravida. Sit diam duis mauris nulla cursus. Erat et
                lectus vel ut sollicitudin elit at amet.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Auctor libero id et, in
                gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel
                ut sollicitudin elit at amet.
              </p>

              <h2 className="footerDownload">Download Our App</h2>
              <div className="d-flex justify-content-evenly mb-5">
                <div className="img">
                  <FaGooglePlay style={googlePlayStyle} />
                  <span>Google Play</span>
                </div>
                <div className="img">
                  <BsFillPlayFill style={playStyle} />
                  <span>App Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 text-center mt-4">
              <a href="#" className="footer-main-links">
                <h2 onClick={handleAboutUs} className="footerUlTitle">
                  About Us
                </h2>
              </a>

              <ul className="footerUl">
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="col-sm-4 text-center mt-4">
              <a href="#" className="footer-main-links">
                <h2 onClick={handlePolicy} className="footerUlTitle">
                  Our Policy
                </h2>
              </a>

              <ul className="footerUl">
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </div>

            <div className="col-sm-4 text-center mt-4">
              <a href="#" className="footer-main-links">
                <h2 onClick={handleContact} className="footerUlTitle">
                  Contact Us
                </h2>
              </a>
              <ul className="footerUl">
                <li>example example example example example , United States</li>
                <li>Email: example@gmail.com</li>
                <li>Phone: +1 3333 333 333</li>
              </ul>
            </div>
          </div>
          <hr style={{ color: "#e98337" }} />

          <div className="row">
            <h3 className="text-center">follow us On</h3>
            <div className="social-links">
              <a href="#" className="twitter">
                <BsFacebook />
              </a>
              <a href="#" className="facebook">
                <AiFillInstagram />
              </a>
              <a href="#" className="instagram">
                <AiFillTwitterCircle />
              </a>
              <a href="#" className="linkedin">
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <hr style={{ color: "#e98337" }} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
