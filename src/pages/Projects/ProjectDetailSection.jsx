import React, { useRef, useState, useEffect } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { Skeleton } from "antd";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { toast } from "react-toastify";

const CarouselCard = ({ description, capacity, client }) => {
  return (
    <article className="max-w-[20rem] w-[20rem] md:w-[476px] md:max-w-[476px] h-[220px] m-2 shadow-md rounded-lg hover:shadow-2xl hover:scale-101 shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300">
      <div className="max-w-full w-full h-4/5 flex">
        <div className="details p-2 text-left w-full text-ellipsis overflow-hidden">
          <h2 className="font-medium capitalize text-slate-400 text-base pb-1">
            {client}
          </h2>
          <h3 className="font-medium text-lg text-wrap truncate pb-1">
            {description}
          </h3>
          <p className="text-slate-500 text-wrap text-clip pt-1">{capacity}</p>
        </div>
      </div>
      <div
        className="w-full my-2 p-1 border-t-2 border-dotted font-medium text-lg text-blue-500 hover:bg-blue-100 transition-all duration-300"
        onClick={() => {
          toast.info("Page is Under Construction \n Sorry for Inconvenience");
        }}
      >
        <span>View Details</span>
      </div>
    </article>
  );
};

const CarouselAbout = ({ details, loading }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 200)
        : container.scrollLeft + (container.offsetWidth - 200);

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="mb-14">
      <ContentWrapper className="relative">
        <IoMdArrowBack
          className="carouselLeftNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -left-4 shadow-even"
          onClick={() => navigation("left")}
        />
        <IoMdArrowForward
          className="carouselRightNav arrow text-2xl text-blue-500 bg-white p-4 w-14 h-14 rounded-full absolute -translate-y-2/4 cursor-pointer z-[2] hidden top-[44%] md:block transition-all hover:scale-110 -right-4 shadow-even"
          onClick={() => navigation("right")}
        />
        <div
          className="carouselItems flex overflow-x-scroll gap-2.5 overflow-y-hidden py-0"
          ref={carouselContainer}
        >
          {!loading
            ? details.map((item) => <CarouselCard key={item.id} {...item} />)
            : [1, 2, 3, 4, 5].map((item) => (
                <Skeleton
                  key={item}
                  className="max-w-[20rem] w-[20rem] md:w-[476px] md:max-w-[476px] h-[220px] p-4 m-2 rounded-lg hover:shadow-all shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300"
                  active={true}
                />
              ))}
        </div>
      </ContentWrapper>
    </div>
  );
};

function ProjectDetailSection({ credentials }) {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setDetails(credentials);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section
      id="offerSection"
      className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center"
    >
      <p className="font-bold md:text-2xl text-[rgb(20, 24, 35)]">
        Our Projects
      </p>
      <CarouselAbout details={details} loading={loading} />
    </section>
  );
}

export default ProjectDetailSection;
