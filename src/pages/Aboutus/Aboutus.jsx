import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { FaIndustry } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import VisionaryLeaders from "./VisionaryLeaders";
import aboutData from "@/constants/about";
import AboutHeroCarousel from "./AboutHeroCarousel";
import Location from "./Location";

const iconComponents = {
  FaIndustry: <FaIndustry />,
  GiRecycle: <GiRecycle />,
  FaWater: <FaWater />,
  MdGavel: <MdGavel />,
};

const images = [
  "https://images.unsplash.com/photo-1496016943515-7d33598c11e6?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1713218938418-0d3892c16ee6?q=80&w=1078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1486671736870-2f695ecdf813?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1733306503324-201addc17a12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
function Aboutus() {
  return (
    <>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 rounded-2xl"
        >
          <ContentWrapper>
            <div className="max-w-[1440px] flex flex-col  justify-center items-center gap-10">
              {/* About Us Content */}
              <motion.div className="m-2 px-5 py-5">
                <h2 className="text-2xl text-center sm:text-4xl font-bold text-blue-800">
                  About Us
                </h2>
              </motion.div>
              <motion.div className="max-w-[1440px] flex flex-col lg:flex-row justify-center items-center gap-10">
                <motion.div className="m-2 px-5 py-10">
                  <AboutHeroCarousel images={images} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full flex flex-col gap-5"
                >
                  {aboutData.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-lg p-2 text-gray-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </ContentWrapper>
        </motion.div>

        {/* Icon Section */}
        <motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-1 mx-8">
            {aboutData.icons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="shadow-md py-6 px-4 rounded-lg flex items-center bg-white"
              >
                <div className="text-[#00afe9] text-2xl sm:text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-3 sm:p-4 mr-3 transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500">
                  {iconComponents[item.icon]}
                </div>
                <div className="text-xs sm:text-lg text-gray-700">
                  {item.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center px-4 mb-20"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-800">
            Our Expertise
          </h2>
          <p className="text-md sm:text-lg max-w-3xl mx-auto mt-3 text-gray-700">
            Our commitment to quality and sustainability ensures top-tier
            solutions.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
            {aboutData.expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white text-blue-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-md sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-md text-gray-600 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Location />

        {/* Visionary Leaders Section */}
        <VisionaryLeaders />
      </ContentWrapper>
    </>
  );
}

export default Aboutus;
