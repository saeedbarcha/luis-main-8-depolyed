import React from "react";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import toast from "react-hot-toast";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  RiLock2Line,
  RiEyeCloseFill,
  RiFacebookFill,
  RiTwitterFill,
} from "react-icons/ri";

import { MdRemoveRedEye } from "react-icons/md";
import { IoLogoGoogleplus } from "react-icons/io";
import {
  Main,
  AppName,
  AppSlogan,
  LogoCont,
  Logo,
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  ForgotPassword,
  CreateAccount,
  FormButton,
  FormParaStatus,
  SocialLoginDiv,
  SvgSocialLogo,
  SocialLoginNames,
  GuestCont,
  GuestLoginDiv,
  GuestLoginNames,
} from "./SignInElements";
import LogoMain from "./Images/logo.jpg";

const SignIn = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  //
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  //
  const google = () => {
    window.open("/api/v1/auth/login", "_self");
  };

  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  // const twitter = () => {
  //   window.open("http://localhost:5000/auth/twitter", "_self");
  // };

  //   const userLogin = async (e) => {
  //     if (!email || !password) {
  //       ("All fields are required!");
  //     } else if (!email.endsWith("@gmail.com")) {
  //       ("Email or Password is Invalid!");
  //     } else {
  //       axios
  //         .post("http://localhost:5000/login", {
  //           email,
  //           password,
  //         })
  //         .then((data) => {
  //           const { token, role, name } = data.data;

  //           Cookies.set("accessToken", token);
  //           Cookies.set("role", role);
  //           Cookies.set("name", name);

  //           if (data.status === 400 || data.status === 401) {
  //             console.log("invalid email or password");
  //           } else if (data.status === 404) {
  //             console.log("user not found!");
  //           } else if (data.status === 200 && Cookies.get("accessToken")) {
  //             console.log("Login Successfully");
  //             setTimeout(() => {
  //               navigate("/");
  //             }, 0);
  //           }
  //           // console.log(data)
  //         });
  //     }
  //   };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
        console.log("login success");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setValidationErrorMessage(error.response.data.message);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Main>
        <AppName>Lubick</AppName>
        <AppSlogan>Interactive shopping </AppSlogan>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        {/* <FormCont onSubmit={HandleSignIn}> */}
        <FormCont>
          <FormHead>Login</FormHead>
          <FormBody>
            <FormInputDiv>
              <HiOutlineMail style={SvgStyle} />
              <FormInput
                type="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter Your Email "
                required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                required
              ></FormInput>
              <Em style={SvgStyle}>
                {showPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>
            <p style={{ color: "red" }}>{validationErrorMessage}</p>
          </FormBody>

          <FormButton type="submit" onClick={handleSubmit}>
            Sign In
          </FormButton>

          <ForgotPassword>Forgot Password?</ForgotPassword>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <CreateAccount> Create a new account</CreateAccount>
          </Link>

          <SocialLoginDiv style={{ backgroundColor: "#2A61FF" }}>
            <RiFacebookFill style={SvgSocialLogo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames>SignIn with facebook</SocialLoginNames>
            </Link>
          </SocialLoginDiv>

          <SocialLoginDiv style={{ backgroundColor: "#00E7FF" }}>
            <RiTwitterFill style={SvgSocialLogo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames>SignIn with twitter</SocialLoginNames>
            </Link>
          </SocialLoginDiv>

          <SocialLoginDiv
            style={{ backgroundColor: "#FF2A2A" }}
            // onClick={google}
          >
            <IoLogoGoogleplus style={SvgSocialLogo} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <SocialLoginNames>SignIn with google</SocialLoginNames>
            </Link>
          </SocialLoginDiv>
        </FormCont>
        <GuestCont>
          <GuestLoginDiv
            style={{
              width: "10%",
              height: "3vh",
              marginBottom: "30px",
              backgroundColor: "#00E7FF",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <GuestLoginNames>Continue as a guest</GuestLoginNames>
            </Link>
          </GuestLoginDiv>
        </GuestCont>
      </Main>
    </>
  );
};

export default SignIn;
