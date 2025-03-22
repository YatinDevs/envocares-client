import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function AboutHeroCarousel({ images }) {
  return (
    <Carousel
      autoplay
      className=" bg-black  object-center w-[350px] rounded-md md:w-[400px] overflow-hidden"
    >
      {images &&
        images.map((image, index) => (
          <div
            className=" max-h-[400px] max-w-[400px] rounded-md overflow-hidden"
            key={index}
          >
            <img
              src={image}
              alt="hotelImages"
              className=" h-[150px] md:h-[300px] rounded-md w-[350px] md:w-[400px] object-cover "
              width={400}
              height={400}
            />
          </div>
        ))}
    </Carousel>
  );
}

export default AboutHeroCarousel;
