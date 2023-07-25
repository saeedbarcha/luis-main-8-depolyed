import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line, RiEyeCloseFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { BiMaleFemale } from "react-icons/bi";

import {
  MdRemoveRedEye,
  MdOutlinePhoneIphone,
  MdLocationOn,
} from "react-icons/md";
import {
  Main,
  LogoCont,
  Logo,
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  FormSelect,
  FormOption,
  FormButton,
  SwitchCont,
  SwitchPara,
  SwitchSpan,
  TermsConCont,
} from "./SignUpElements";
import LogoMain from "./Images/logo.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("Male");
  const [answer, setAnswer] = useState("");
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleUserGender = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setGender(Value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address,
        dateOfBirth,
        gender,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setValidationErrorMessage(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setValidationErrorMessage(
        error.response.data.error || error.response.data.message
      );
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Main>
        <LogoCont>
          <Logo src={LogoMain} alt="main-logo"></Logo>
        </LogoCont>
        <FormCont>
          <FormHead>Sign Up</FormHead>
          <FormBody>
            <FormInputDiv>
              <RiUser3Line style={SvgStyle} />
              <FormInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="fullName"
                placeholder="Full Name"
                required
                autoFocus
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>

            <FormInputDiv>
              <HiOutlineMail style={SvgStyle} />
              <FormInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Email"
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
                id="password"
                placeholder="Password"
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

            <FormInputDiv>
              <RiLock2Line style={SvgStyle} />
              <FormInput
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              ></FormInput>
              <Em style={SvgStyle}>
                {showConfirmPassword ? (
                  <MdRemoveRedEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <RiEyeCloseFill
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </Em>
            </FormInputDiv>

            <FormInputDiv>
              <MdOutlinePhoneIphone style={SvgStyle} />
              <FormInput
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="number"
                placeholder="Phone Number"
                required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>

            <FormInputDiv>
              <MdLocationOn style={SvgStyle} />
              <FormInput
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                placeholder="Complete Address"
                required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>

            <FormInputDiv>
              <BiMaleFemale style={SvgStyle} />
              <FormSelect name="gender" onChange={handleUserGender}>
                <FormOption value="Male">Male</FormOption>
                <FormOption value="Female">Female</FormOption>
                <FormOption value="Other">Other</FormOption>
              </FormSelect>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>

            <FormInputDiv>
              <FaBirthdayCake style={SvgStyle} />
              <FormInput
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                id="sports"
                required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>

            <FormInputDiv>
              <FcSportsMode style={SvgStyle} />
              <FormInput
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                id="sports"
                placeholder="Favorite sports"
                required
              ></FormInput>
              <Em style={SvgStyle}></Em>
            </FormInputDiv>
          </FormBody>
          <p style={{ color: "red" }}>{validationErrorMessage}</p>
          <FormButton type="submit" onClick={handleSubmit}>
            Sign Up
          </FormButton>
        </FormCont>
        <SwitchCont>
          <SwitchPara >
            Already having account?
            <Link to="/login "> <br/>
              <SwitchSpan > Log In Here</SwitchSpan>
            </Link>
          </SwitchPara>
        </SwitchCont>

        <TermsConCont>
          <SwitchPara>
            By clicking Sign Up, you agree to our Terms and Conditions. Learn
            how we collect, use and share your data in our Data Policy and how
            we use cookies and similar technology in our Cookies Policy. You may
            receive SMS Notifications from us and can opt out any time.
          </SwitchPara>
        </TermsConCont>
      </Main>
    </>
  );
};

export default SignUp;
