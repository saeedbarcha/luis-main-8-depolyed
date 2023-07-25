import React from "react";
import Sdata from "../SliderData/Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import imgLink from "../SliderData/images/slide-1.png"

const SlideCardAll = () => {
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
                border: `${dotBorderWidth}px #525252 solid`,
                borderRadius: "50%",
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
      <section className="homeSlideAll m-auto">
        <Slider {...settings}>
          {Sdata.map((value, index) => {
            return (
              <>
                <div
                  className="d-flex h-100"
                  key={value?.id}
                  //  style={{
                  //   backgroundImage: `linear-gradient(rgba(0, 0, 1, 0.5), rgba(8, 8, 8, 0.7)), url(${imgLink})`,
                  //   // Add other CSS styles if needed
                  // }}
                >
                  <div className="leftAll">
                    <h1 className="descountTextAll">{value?.Descount}</h1>
                    <h1 className="nameTextAll">{value?.name}</h1>
                    <p className="desTextAll">{value?.desc}</p>
                    <button className="MoreBtnSliderAll">More About</button>
                  </div>
                  <div className="sliderRightImg">
                    <img
                      src={value?.cover}
                      alt="slider image"
                      className="sliderImg"
                    />
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

export default SlideCardAll;
