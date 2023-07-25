import React from "react";
import { MdOutlinePhotoCameraBack } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";

import "./style.css";
const SectionTitleWithOutMoreBtn = (props) => {
  const { SectionIcon, titleName } = props;

  const galleryIconStyle = {
    width: "100%",
    height: "100%",
    color: "#38E54D",
  };

  const servicesIconStyle = {
    width: "100%",
    height: "100%",
    color: "#DF711B",
  };

  // Render the icon based on the icon name received from props
  const renderIcon = () => {
    switch (SectionIcon) {
      case "MdOutlinePhotoCameraBack":
        return <MdOutlinePhotoCameraBack style={galleryIconStyle} />;
      case "FaServicestack":
        return <FaServicestack style={servicesIconStyle} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="row pt-4 pb-4">
        <div className="SectionTitleCont d-flex justify-content-between">
          <div className="innerContFirst">
            <div className="sectionTitleIcon">{renderIcon()}</div>
            <h2 className="sectionTitleName" style={{ margin: "0px" }}>{titleName}</h2>
          </div>
          {/* <div className="innerContSecond">
              <span className="textViewAll">View all</span>
              <BsPlayFill style={moreIconStyle} />
            </div> */}
        </div>
      </div>
    </>
  );
};

export default SectionTitleWithOutMoreBtn;
