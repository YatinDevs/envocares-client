import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

const VisionaryLeaders = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/leaders");
        console.log(response);
        setLeaders(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchLeaders();
  }, []);
  console.log(leaders);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-container bg-blue-50 py-24 text-gray-700"
    >
      <ContentWrapper>
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-palanquin text-center my-10 text-3xl md:text-4xl font-bold"
        >
          Our
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Visionary
          </span>
          Leaders
        </motion.h3>

        <div className="flex justify-center items-center flex-wrap gap-10">
          {leaders.map((leader, index) => {
            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col justify-center items-center"
              >
                <motion.img
                  alt={leader.name}
                  src={`http://127.0.0.1:8000/storage/${leader.image_url}`}
                  className="w-[120px] h-[120px] rounded-full object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
                <h3 className="mt-4 font-palanquin text-xl md:text-2xl text-center font-bold">
                  {leader.name}
                </h3>
                <h4 className="mt-1 font-palanquin text-md md:text-lg text-center font-bold">
                  {leader.title}
                </h4>
                <p className="info-text text-center md:text-md mt-2 max-w-sm">
                  {leader.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </ContentWrapper>
    </motion.section>
  );
};

export default VisionaryLeaders;
