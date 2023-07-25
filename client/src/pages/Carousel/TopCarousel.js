import React from "react";
import CarouselMobile from "./CarouselMobile/CarouselMobile";
import CarouselForAll from "./CarouselForAll/CarouselForAll";

const TopCarousel = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="d-block d-lg-none">
          <CarouselMobile />
        </div>
        <div className="d-none d-lg-block">
          <CarouselForAll />
        </div>
      </section>
    </>
  );
};

export default TopCarousel;
