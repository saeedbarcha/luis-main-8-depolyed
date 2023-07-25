import React from "react";
import Cart from "./Cart";
import "./style.css";
import SectionTitleWithMoreBtn from "../../components/SectionTitle/SectionTitleWithMoreBtn/SectionTitleWithMoreBtn";

const NewArrivals = () => {
  // passing iconName to SectionTitle component
  const SectionIcon = "AiOutlineAppstoreAdd";
  const titleName = "New Arrivals";

  return (
    <>
      <section className="container-fluid mt-5 mb-5 mainContNewArrivals">
        <SectionTitleWithMoreBtn
          SectionIcon={SectionIcon}
          titleName={titleName}
        />
        <Cart />
      </section>
    </>
  );
};

export default NewArrivals;
