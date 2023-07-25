import React from "react";
import { MdFlashOn, MdOutlineGppGood } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import "./style.css";
const SectionTitleWithMoreBtn = (props) => {
  const { SectionIcon, titleName } = props;

  const flashIconStyle = {
    width: "100%",
    height: "100%",
    color: "#e94560",
  };
  const TopCategoriesIconStyle = {
    width: "100%",
    height: "100%",
    color: "#38E54D",
  };

  const newArrivalsIconStyle = {
    width: "100%",
    height: "100%",
    color: "#DF711B",
  };
  
  // Render the icon based on the icon name received from props
  const renderIcon = () => {
    switch (SectionIcon) {
      case "MdFlashOn":
        return <MdFlashOn style={flashIconStyle} />;
      case "MdOutlineGppGood":
        return <MdOutlineGppGood style={TopCategoriesIconStyle} />;
      case "AiOutlineAppstoreAdd":
        return <AiOutlineAppstoreAdd style={newArrivalsIconStyle} />;
      default:
        return null; // Return null if the icon name is not recognized
    }
  };

  const moreIconStyle = {
    width: "30px",
    height: "30px",
    color: "#e94560",
  };

  return (
    <>
      <div className="row pt-4 pb-4">
        <div className="SectionTitleCont d-flex justify-content-between">
          <div className="innerContFirstMoreBtn">
            <div className="sectionTitleIcon">{renderIcon()}</div>
            <h2 className="sectionTitleName">{titleName}</h2>
          </div>
          <div className="innerContSecondMoreBtn">
            <span className="textViewAll">View all</span>
            <BsPlayFill style={moreIconStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitleWithMoreBtn;
