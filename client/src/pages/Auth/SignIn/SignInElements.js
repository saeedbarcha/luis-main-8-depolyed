import styled from "styled-components";
import Bg from "./Images/bg.jpg";

export const Main = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  padding-bottom: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 11;
  /* position: absolute; */
`;
export const LogoCont = styled.div`
  width: 48%;
  height: 24vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const AppName = styled.h5`
  width: 85%;
  padding-top: 10px;
  height: 6vh;
  color: #e98337;
  font-family: corbel light;
  font-style: bolder;
  font-size: 40px;
  font-weight: 900;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppSlogan = styled.h5`
  width: 85%;
  height: 4vh;
  color: #fff;
  font-family: corbel light;
  font-weight: 600;
  font-size: 17px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 70%;
`;
export const FormCont = styled.form`
  width: 48%;
  height: auto;
  display: flex;
  margin-top: -40px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: #1e1f24;
  border-radius: 12px;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 96%;
  }
`;

export const FormHead = styled.h5`
  width: 85%;
  height: 8vh;
  padding-top: 45px;
  padding-bottom: 30px;
  color: #fff;
  font-family: corbel light;
  font-weight: 900;
  font-size: 37px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBody = styled.div`
  width: 100%;
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Em = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const SvgStyle = {
  height: "80%",
  width: "8%",
  color: "#e98337",
};

export const FormInputDiv = styled.div`
  width: 60%;
  height: 5vh;
  margin: 6px 15px;
  padding: 2px 0 2px 8px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #5e2900;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 96%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  height: 100%;
  text-align: center;
  transition: all ease-in-out 0.3s;
  color: #dadee3;

  &:focus {
    width: 80%;
    text-align: start;
    transition: all ease-in-out 0.3s;
    box-shadow: none !important;
    border: none !important;
    outline: none !important;
    background-color: transparent !important;
    color: white;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

export const FormPara = styled.p`
  color: #fff;
  font-size: 15px;
  font-family: corbel light;
  font-weight: 500;
  cursor: no-drop;
  height: 6vh;
  margin: 0;
  text-decoration: underline;
`;
export const ForgotPassword = styled.p`
  color: #fff;
  width: 50%;
  font-size: 15px;
  text-align: center;
  font-family: corbel light;
  font-weight: 800;
  margin-top: 15px;
  cursor: no-drop;
  text-decoration: underline;
`;
export const CreateAccount = styled.h3`
  color: #e98337;
  width: 100%;
  font-family: corbel light;
  font-weight: 800;
  padding:0px 10px;
  border-radius:15px;
  border: 1px solid transparent;

  &:hover {
    color: #fff;
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    border: 1px solid #00a99e;
    box-shadow: 0px 2px 11px 0px #326867;
  }
  &:active {
    color: #fff;
    background: #f17b21;
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    border: 1px solid #00a99e;
    box-shadow: 0px 2px 11px 0px #326867;
  }
`;
export const FormButton = styled.button`
  width: 50%;
  height: 6vh;
  border-radius: 8px;
  border: none;
  background: #e98337;
  color: #fff;
  font-family: corbel light;
  font-weight: 500;
  font-size: 17px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 80%;
  }

  @media (max-width: 320px) {
    width: 90%;
  }
  &:hover {
    color: #fff;
    background: #f17b21;
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    border: 1px solid #00a99e;
    box-shadow: 0px 2px 11px 0px #326867;
  }
`;

export const FormParaStatus = styled.p`
  color: #fff;
  font-size: 15px;
  font-family: corbel light;
  font-weight: 500;
  cursor: no-drop;
  height: 3vh;
  margin: 0;
`;
export const SocialLoginDiv = styled.div`
  min-width: 140px;
  margin: 3px;
  margin-top: 10px;
  height: 3.5vh;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #0c3e3d;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    /* border : 1px solid #FF5F03; */
    box-shadow: 0px 2px 6px 0px #ff5f03;
  }

  @media (max-width: 900px) {
    width: 45%;

  }
  @media (max-width: 600px) {
    width: 30%;
  }
`;
export const SocialLoginNames = styled.p`
  color: #fff;
  font-family: corbel light;
  font-weight: 700;
  margin-left: 3px;
  margin-top: 10px;
  font-size: 12px;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
export const SvgSocialLogo = {
  height: "100%",
  width: "13%",
  color: "white",
};

export const GuestCont = styled.form`
  width: 40%;
  display: flex;
  justify-content: center;
  justify-content: center;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const GuestLoginDiv = styled.div`
  width: 10%;
  min-width: 110px;
  height: 6px;
  height: 3.5vh;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00e7ff;
  &:hover {
    transition: 0.3s all ease-in-out;
    font-weight: 700;
    /* border : 1px solid #FF5F03; */
    box-shadow: 0px 2px 6px 0px #ff5f03;
  }

  @media (max-width: 900px) {
    width: 35%;
  }

  @media (max-width: 900px) {
    width: 35%;
  }
`;

export const GuestLoginNames = styled.p`
  color: #fff;
  font-family: corbel light;
  font-weight: 700;
  margin-left: 5px;
  margin-top: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;
