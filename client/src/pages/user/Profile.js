import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { RiUser3Line } from "react-icons/ri";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import { FaBirthdayCake } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { BiMaleFemale } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line, RiEyeCloseFill } from "react-icons/ri";
import {
  MdRemoveRedEye,
  MdOutlinePhoneIphone,
  MdLocationOn,
} from "react-icons/md";
import {
  FormCont,
  FormHead,
  FormBody,
  Em,
  SvgStyle,
  FormInputDiv,
  FormInput,
  FormButton,
  FormSelect,
  FormOption,
} from "./SignUpElements";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");
  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
    setGender(gender);
    setDateOfBirth(dateOfBirth);
  }, [auth?.user]);

  const handleUserGender = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    setGender(Value);
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
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
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
        setValidationErrorMessage("");
      }
    } catch (error) {
      console.log(error);
      setValidationErrorMessage(
        error.response.data.error || error.response.data.message
      );
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-8 m-auto mt-4 pt-4 pb-4">
            <UserMenu />
          </div>
          <div className="col-lg-10 pt-4 pb-4">
            <FormCont>
              <FormHead>Update Profile</FormHead>
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

                <FormInputDiv title="You can't update your E-mail">
                  <HiOutlineMail style={SvgStyle} />
                  <FormInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="emailAddress"
                    placeholder="Email"
                    required
                    disabled
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
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    ) : (
                      <RiEyeCloseFill
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
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
                    id="dateOfBirth"
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
              <p
                className="m-2 text-center"
                style={{ color: "red", fontSize: "14px" }}
              >
                {validationErrorMessage}
              </p>
              <FormButton
                type="submit"
                onClick={handleSubmit}
                encType="multipart/form-data"
              >
                Update Profile
              </FormButton>
            </FormCont>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
