import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const ServiceHeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchServiceHeroSection = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/service-hero-sections"
        );
        console.log(response);
        setHeroContent(response.data);
      } catch (error) {
        console.error("Error fetching HeroContent:", error);
      }
    };

    fetchServiceHeroSection();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (heroContent.length === 0) return null;

  const { image_url, title, description, brochure_url } =
    heroContent[currentIndex];

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden rounded-bl-[40%] md:rounded-bl-[20%] rounded-tr-[40%] md:rounded-tr-[20%]">
      <motion.div
        key={image_url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(http://127.0.0.1:8000/storage/${image_url})`,
        }}
      ></motion.div>

      <button onClick={prevImage} className="absolute left-10 md:left-20">
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button onClick={nextImage} className="absolute right-10 md:right-20">
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      {/* Text Content with Transitions */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="md:mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={`http://127.0.0.1:8000/storage/${brochure_url}`}
            download
            className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-6 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            DOWNLOAD SERVICE BROCHURE
          </a>{" "}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServiceHeroSection;
