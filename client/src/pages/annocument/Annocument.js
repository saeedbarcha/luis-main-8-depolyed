import React from "react";
import carImg from "./images/banner-1.png";
import mapImg from "./images/banner-2.png";
import SectionTitleWithOutMoreBtn from "../../components/SectionTitle/SectionTitleWithOutMoreBtn/SectionTitleWithOutMoreBtn";

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  };
  const mystyle1 = {
    width: "68%",
    height: "340px",
  };

  const SectionIcon = "MdOutlinePhotoCameraBack";
  const titleName = "Gallery";

  return (
    <>
      <section className="container-fluid mt-5 mb-5">
        <SectionTitleWithOutMoreBtn
          SectionIcon={SectionIcon}
          titleName={titleName}
        />
        <div className="row">
          <div className="col-12 d-flex">
            <div className="img" style={mystyle}>
              <img
                src={carImg}
                width="100%"
                height="100%"
                alt="Annocument pic"
              />
            </div>
            <div className="img" style={mystyle1}>
              <img
                src={mapImg}
                width="100%"
                height="100%"
                alt="Annocument pic"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Annocument;
