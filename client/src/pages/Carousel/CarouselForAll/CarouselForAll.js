import React from "react";
import SideBar from "../SideBar/SideBar";
import SlideCardAll from "./SlideCardAll";
import "./CarouselForAll.css";
// import imgLink from "../SliderData/images/slide-1.png"

const CarouselForAll = () => {
  return (
    <>
      <section
        className="container-fluid topCarouselMainCont "
        style={
          {
            // backgroundImage: `linear-gradient(rgba(0, 0, 1, 0.5), rgba(8, 8, 8, 0.7)), url(${imgLink})`,
          }
        }
      >
        <div className="row m-auto">
          <div className="col-lg-3 m-auto pt-1 pb-1">
            <SideBar />
          </div>
          <div className="col-lg-9 m-auto">
            <SlideCardAll />
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselForAll;
