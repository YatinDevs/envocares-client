import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/hero-sections"
        );
        console.log(response);
        setHeroContent(response.data);
      } catch (error) {
        console.error("Error fetching HeroContent:", error);
      }
    };

    fetchHeroSection();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
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

  const { image_url, title, description } = heroContent[currentIndex];

  return (
    <div className="relative shadow-xl w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden rounded-b-[20%] md:rounded-b-[15%]">
      <motion.div
        key={image_url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60"
        style={{
          backgroundImage: `url(http://127.0.0.1:8000/storage/${image_url})`,
        }}
      ></motion.div>

      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
