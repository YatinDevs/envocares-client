import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PatentSVG from "../../../public/assets/patent.svg";
import InstallationSVG from "../../../public/assets/installation.svg";
import EngineersSVG from "../../../public/assets/engineers.svg";
import UnitsSVG from "../../../public/assets/units.svg";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <ContentWrapper>
      <motion.div className="md:py-8 mt-20" ref={ref}>
        <div className="bgSvgTrain1"></div>
        <div className="bgSvgTrain2"></div>
        <div className="bgSvgHotel"></div>
        {/* Animated Counters */}
        <div className="flex flex-wrap justify-around text-center mb-12 gap-8">
          {[
            {
              icon: PatentSVG,
              count: 100,
              label: "Patents",
            },
            { icon: InstallationSVG, count: 10, label: "Installations" },
            {
              icon: EngineersSVG,
              count: 50,
              label: "Trained Service Engineers",
            },
            {
              icon: UnitsSVG,
              count: 50,
              label: "Manufacturing Units",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center bg-white py-6 px-8 rounded-full w-40 md:w-50 "
            >
              <div className="w-16 h-16 mb-2">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-blue-800">
                {inView ? <CountUp end={item.count} duration={3} /> : 0}+
              </h2>
              <p className="text-xs md:text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ContentWrapper>
  );
};

export default Counter;
