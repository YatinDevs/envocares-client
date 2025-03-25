import React from "react";
import { Tabs } from "antd";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { FaBuilding, FaWater, FaIndustry, FaLeaf } from "react-icons/fa";

const ServicesSection = () => {
  const [selectedTab, setSelectedTab] = React.useState("Engineering");

  // Engineering Services
  const engineeringServices = [
    { title: "Urban Infrastructure Planning", icon: FaBuilding },
    { title: "Water & Wastewater Management", icon: FaWater },
    { title: "MEP Works", icon: FaIndustry },
    { title: "Safety Auditor", icon: FaLeaf },
  ];

  // Environment Services
  const environmentServices = [
    { title: "Environment Clearance", icon: FaLeaf },
    { title: "Green Building Certification", icon: FaBuilding },
    { title: "Consent from Pollution Board", icon: FaWater },
  ];

  // Tabs Configuration
  const tabItems = [
    { key: "Engineering", label: "Engineering Division" },
    { key: "Environment", label: "Environment Division" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

      {/* Ant Design Tabs */}
      <Tabs
        defaultActiveKey="Engineering"
        centered
        size="large"
        onChange={(key) => setSelectedTab(key)}
        items={tabItems}
        className=""
      />

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center  gap-10 mt-6"
      >
        {(selectedTab === "Engineering"
          ? engineeringServices
          : environmentServices
        ).map((service, index) => (
          <Parallax key={index} speed={-5}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="text-center w-[300px] h-[200px] p-6 shadow-lg transition-transform duration-300 bg-white rounded-lg">
                {React.createElement(service.icon, {
                  className: "text-5xl text-blue-500 mb-3",
                })}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
