import ReviewCard from "../../components/ReviewCard/ReviewCard";
// import { reviews } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

import user1 from "../../../public/assets/profile-pictures/user1.jpg";
import user2 from "../../../public/assets/profile-pictures/user2.jpg";
import user3 from "../../../public/assets/profile-pictures/user3.jpg";
import user4 from "../../../public/assets/profile-pictures/user4.jpg";
import user5 from "../../../public/assets/profile-pictures/user5.jpg";
import user6 from "../../../public/assets/profile-pictures/user6.jpg";

const Testimonials = () => {
  const reviews = [
    {
      imgURL: user1,
      customerName: "Government Project Engineer",
      rating: 4.5,
      feedback:
        "Suviam Infra has been a reliable partner in our irrigation projects. Their RCC pipes are of exceptional quality, and their team ensures timely project execution.",
    },
    {
      imgURL: user2,
      customerName: "Infrastructure Developer",
      rating: 4.5,
      feedback:
        "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    },
    {
      imgURL: user3,
      customerName: "Project Engineer",
      rating: 4.5,
      feedback:
        "As a private contractor, I trust Suviam Infra for all my infrastructure needs. Their commitment to quality and sustainability is unmatched.",
    },
    {
      imgURL: user4,
      customerName: "Government Project Engineer",
      rating: 4.5,
      feedback:
        "Suviam Infra has been a reliable partner in our irrigation projects. Their RCC pipes are of exceptional quality, and their team ensures timely project execution.",
    },
    {
      imgURL: user5,
      customerName: "Infrastructure Developer",
      rating: 4.5,
      feedback:
        "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    },
    {
      imgURL: user6,
      customerName: "Project Engineer",
      rating: 4.5,
      feedback:
        "As a private contractor, I trust Suviam Infra for all my infrastructure needs. Their commitment to quality and sustainability is unmatched.",
    },
  ];

  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className=" m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
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
        className="w-full  max-w-xl mx-auto mb-12 mt-6"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="w-full bg-gray-100 rounded-lg text-center"
          >
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex mt-16 justify-center items-center flex-wrap gap-10"></div>
    </section>
  );
};

export default Testimonials;
