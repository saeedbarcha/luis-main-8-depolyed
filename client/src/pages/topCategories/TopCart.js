import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tdata from "./Tdata";

const TopCart = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 900, // Transition speed in milliseconds
    autoplay: true,
    arrows: false,
    autoplaySpeed: 900, // Autoplay speed in milliseconds
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Set a breakpoint for mobile size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Tdata.map((value, index) => {
          return (
            <>
              <div className="m-2" key={index}>
                <div className="productOrderDetails d-flex justify-content-between">
                  <span className="orderDetails">{value?.orderDetails}</span>
                </div>
                <div className="productName d-flex justify-content-between">
                  <span className="name">{value?.name}</span>
                </div>

                <div className="d-flex justify-content-center align-content-center">
                  <img src={value?.cover} alt="img" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default TopCart;
