import React from "react";
import SectionTitleWithOutMoreBtn from "../../components/SectionTitle/SectionTitleWithOutMoreBtn/SectionTitleWithOutMoreBtn";
import { MdLocalShipping, MdSafetyDivider } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsCartFill } from "react-icons/bs";
import { GiStamper } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import "./style.css";

const iconStyle = {
  width: "45px",
  height: "45px",
  color: "#096DDF",
};

const Wrapper = () => {
  const data = [
    {
      cover: <MdLocalShipping style={iconStyle} />,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <MdSafetyDivider style={iconStyle} />,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <VscWorkspaceTrusted style={iconStyle} />,
      title: "Shop With Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <GiStamper style={iconStyle} />,
      title: "Product Authenticity Assurance",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BsCartFill style={iconStyle} />,
      title: "Instant Order Assistance",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <BiSupport style={iconStyle} />,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    
  ];

  const SectionIcon = "FaServicestack";
  const titleName = "Our Services";
  return (
    <>
      <section className="container-fluid mt-5 mb-5 wrapper">
        <SectionTitleWithOutMoreBtn
          SectionIcon={SectionIcon}
          titleName={titleName}
        />
        <div className="row">
          {data.map((val, index) => {
            return (
              <div className="col-md-4 mt-4" key={index}>
                <div className="showCordCont">
                  <div className="img  d-flex align-items-center justify-content-center icon-circle">
                    <i>{val?.cover}</i>
                  </div>
                  <h3>{val?.title}</h3>
                  <p>{val?.decs}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
