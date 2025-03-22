import React, { useState } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "FvPakzqM3h8"; // Default YouTube Video ID

  return (
    <ContentWrapper>
      <div className="relative mb-10 mt-20">
        {/* Section Heading */}
        <h2 className="text-3xl my-20 text-center sm:text-5xl font-bold text-blue-800">
          Our Vision
        </h2>
        <div className="flex flex-col md:flex-row md:mx-10 px-10 justify-center items-center">
          {" "}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex flex-col gap-5 "
            >
              <p className="text-md md:text-2xl font-bold  p-2 text-gray-700">
                ENVOCARE Consulting Pvt. Ltd. (ECPL) is a leading provider of
                environmental and engineering services for infrastructure
                projects.
              </p>
              <p className="text-md md:text-2xl font-bold  p-2 text-gray-700">
                We specialize in urban infrastructure planning, water and
                wastewater management, solid waste management, MEP works, and
                environmental consultancy.
              </p>
              <p className="text-md  font-bold md:text-2xl p-2 text-gray-700">
                With a team of highly skilled professionals and a
                customer-centric approach, we ensure the highest standards of
                quality and efficiency in every project.
              </p>
            </motion.div>
          </div>
          {/* Video Container */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center items-center  gap-4 overflow-x-auto  ">
            {/* Conditional Rendering for Video */}
            {!isPlaying ? (
              <div
                className="relative mb-4 w-full max-w-lg cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* Default YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Video Thumbnail"
                  className="w-full h-auto rounded-lg object-contain shadow-lg transition-opacity duration-700 hover:opacity-80"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="50"
                      height="50"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full max-w-lg h-[315px] rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube Video Player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default VideoSection;
