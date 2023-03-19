import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function ImageSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Image
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/Idea_cafe.jpeg"
            alt="Hi"
          />
        </div>
        <div>
          <Image
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/Idea_cafe.jpeg"
            alt="Hi"
          />
        </div>
        <div>
          <Image
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/makerspace.png"
            alt="Hi"
          />
        </div>
        <div>
          <Image
            height={"250vh"}
            width={"80%"}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgb(250 255 255 / 0.3)",
            }}
            src="/mutbi.png"
            alt="Hi"
          />
        </div>
      </Slider>
    </>
  );
}

export default ImageSlider;
