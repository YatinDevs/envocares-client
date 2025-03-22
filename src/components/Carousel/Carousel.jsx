import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import axios from "axios";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import axiosInstance from "@/services/api";

function Carousel() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const carouselContainer = useRef(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axiosInstance.get("/clients");
        console.log(response);
        setClients(response.data);
      } catch (err) {
        setError("Failed to fetch clients");
        console.error("Error fetching clients:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const navigate = (direction) => {
    if (!carouselContainer.current) return;
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  const SkeletonItem = () => (
    <div className="w-[200px] h-[200px] bg-gray-300 animate-pulse rounded-2xl"></div>
  );

  return (
    <div className="relative w-full my-20">
      <ContentWrapper className="relative">
        {/* Navigation Arrows */}
        <IoMdArrowBack
          className="absolute left-6 top-[50%] transform -translate-y-1/2 bg-white p-4 w-14 h-14 rounded-full shadow-lg text-black cursor-pointer z-10 hidden md:block hover:scale-110 transition-all"
          onClick={() => navigate("left")}
        />
        <IoMdArrowForward
          className="absolute right-6 top-[50%] transform -translate-y-1/2 bg-white p-4 w-14 h-14 rounded-full shadow-lg text-black cursor-pointer z-10 hidden md:block hover:scale-110 transition-all"
          onClick={() => navigate("right")}
        />

        {/* Title */}
        <h3 className="text-center text-2xl md:text-4xl font-bold font-palanquin my-10">
          Our
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Clients
          </span>
        </h3>

        {/* Loading State */}
        {loading ? (
          <div className="flex gap-4 justify-center">
            {[...Array(5)].map((_, index) => (
              <SkeletonItem key={index} />
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : clients.length === 0 ? (
          <p className="text-center text-gray-500">No clients available</p>
        ) : (
          <div
            className="carouselItems flex gap-4 py-2 overflow-x-auto scroll-smooth scrollbar-hide"
            ref={carouselContainer}
          >
            {clients?.map((client) => (
              <div
                key={client.id}
                className="w-[200px] h-[200px] shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`http://127.0.0.1:8000/storage/${client.image}`}
                  alt={client.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
