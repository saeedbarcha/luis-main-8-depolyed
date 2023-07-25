import React from "react";
import Sdata from "../SliderData/Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCardMobile = () => {
  const dotWidth = window.innerWidth >= 900 ? 14 : 8;
  const dotHeight = window.innerWidth >= 900 ? 14 : 8;
  const dotBorderWidth = window.innerWidth >= 900 ? 3 : 1;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return (
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-15px",
            listStyle: "none",
          }}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              className={dot.props.className}
              style={{
                marginBottom: "0 5px",
                width: `${dotWidth}px`,
                height: `${dotHeight}px`,
                borderRadius: "50%",
                border: `${dotBorderWidth}px #525252 solid`,
                backgroundColor:
                  dot.props.className === "slick-active" ? "#ff6f00" : "white", 
                cursor: "pointer",
              }}
            />
          ))}
        </ul>
      );
    },
  };

  return (
    <>
      <section className="homeSlideMobile">
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div
                  className="sliderMobile m-0 p-0"
                  key={value?.id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 1, 0.6), rgba(8, 8, 8, 0.6)), url(${value?.cover})`,
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="leftMobile">
                    <h1 className="descountTextAll">{value?.Descount}</h1>
                    <h1 className="nameTextAll">{value?.name}</h1>
                    <p className="desTextAll">{value?.desc}</p>
                    <button className="MoreBtnSliderAll">More</button>
                  </div>
                
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SlideCardMobile;
