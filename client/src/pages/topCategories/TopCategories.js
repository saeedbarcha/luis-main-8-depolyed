import React from "react";
import "./style.css";
import TopCart from "./TopCart";
import SectionTitleWithMoreBtn from "../../components/SectionTitle/SectionTitleWithMoreBtn/SectionTitleWithMoreBtn";

const TopCategories = () => {

    // passing iconName to SectionTitle component
    const SectionIcon = "MdOutlineGppGood";
    const titleName="Top Categories"

  return (
    <>
      <section className="container-fluid mt-5">
      <SectionTitleWithMoreBtn SectionIcon={SectionIcon} titleName={titleName}/>
        <div className="row ">
        <div className="slider">
          <TopCart />
        </div>
        </div>
      </section>
    </>
  );
};

export default TopCategories;
