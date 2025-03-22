import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/testimonials"
        );
        console.log(response);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say?
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-xl mx-auto mb-12 mt-6"
      >
        {reviews &&
          reviews?.map((review, index) => (
            <SwiperSlide
              key={index}
              className="w-full bg-gray-100 rounded-lg text-center"
            >
              <ReviewCard
                imgURL={`http://127.0.0.1:8000/storage/${review.image_url}`} // Prepend base URL
                customerName={review.customer_name}
                rating={review.rating}
                feedback={review.feedback}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex mt-16 justify-center items-center flex-wrap gap-10"></div>
    </section>
  );
};

export default Testimonials;
