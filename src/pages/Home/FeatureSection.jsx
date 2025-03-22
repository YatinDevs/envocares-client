import {
  MdOutlineHighQuality,
  MdOutlineFactory,
  MdOutlineAccessTime,
  MdOutlineEco,
  MdVerified,
  MdEngineering,
} from "react-icons/md";
import { FaRegHandshake, FaTruckMoving } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";


const features = [
  {
    icon: <MdOutlineHighQuality />,
    text: "Decades of Excellence",
    description:
      "With over a decade of expertise, we deliver world-class infrastructure solutions with precision and quality.",
  },
  {
    icon: <MdOutlineFactory />,
    text: "Advanced Manufacturing & Engineering",
    description:
      "Leveraging state-of-the-art technology, we ensure compliance, efficiency, and sustainability in every project.",
  },
  {
    icon: <MdOutlineAccessTime />,
    text: "Timely & Cost-Efficient Solutions",
    description:
      "We prioritize efficiency, ensuring projects are delivered on time without compromising on quality.",
  },
  {
    icon: <MdOutlineEco />,
    text: "Sustainable & Innovative Practices",
    description:
      "We integrate eco-friendly materials and advanced technologies to create sustainable solutions for the future.",
  },
  {
    icon: <FaRegHandshake />,
    text: "Trusted by Public & Private Sectors",
    description:
      "Our credibility is built on successful collaborations with government and private enterprises across industries.",
  },
  {
    icon: <MdVerified />,
    text: "Certified & Industry Compliant",
    description:
      "Adhering to national and international safety and quality standards, we guarantee reliability and compliance.",
  },
  {
    icon: <MdEngineering />,
    text: "Expert Engineering & Consultancy",
    description:
      "Our experienced engineering team offers top-tier solutions in urban planning, wastewater management, and infrastructure development.",
  },
  {
    icon: <RiBuilding2Line />,
    text: "Comprehensive Infrastructure Solutions",
    description:
      "From planning to execution, we provide robust and durable infrastructure services tailored to industry needs.",
  },
  {
    icon: <FaTruckMoving />,
    text: "Seamless Logistics & Project Execution",
    description:
      "Our streamlined logistics and supply chain management ensure smooth and hassle-free project completion.",
  },
];

const FeatureSection = () => {
  return (
    <div className="relative my-20 min-h-[700px] text-gray-700">
      <ContentWrapper>
        <div className="text-center">
          <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
            Why Choose
            <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
              EnvoCare ?
            </span>
          </h3>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-6 mt-10 lg:mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full shadow-md px-6 rounded-2xl py-6 active:scale-95 bg-white overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 175, 233, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col justify-center items-center text-center">
                <motion.div
                  className="text-[#00afe9] text-3xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h5 className="mt-3 mb-2 text-md md:text-lg font-semibold">
                  {feature.text}
                </h5>
                <p className="text-md md:text-lg text-neutral-600 px-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentWrapper>
    </div>
  );
};

export default FeatureSection;
