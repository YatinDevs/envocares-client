import React from "react";
import { Carousel } from "antd";

const MotionCarousel = ({ images }) => {
  console.log(images);
  return (
    <div className="w-full max-w-lg mx-auto">
      <Carousel autoplay className="rounded-lg overflow-hidden shadow-md">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col h-90 w-10 items-center"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-sm font-semibold">
              {item.name}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MotionCarousel;
