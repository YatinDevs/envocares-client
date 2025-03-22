import React, { useState } from "react";
import { Tabs } from "antd";
import { motion } from "framer-motion";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { ChevronRight, ChevronDown } from "lucide-react";
import { FaIndustry, FaLeaf, FaWater, FaBuilding } from "react-icons/fa";

// Combined Services Data
const servicesData = {
  Engineering: [
    {
      title: "Urban Infrastructure Planning",
      description: "Planning sustainable urban projects efficiently.",
      icon: FaBuilding,
    },
    {
      title: "Water & Wastewater Management",
      description: "Efficient water resource management and treatment.",
      icon: FaWater,
    },
    {
      title: "MEP Works",
      description:
        "Mechanical, Electrical, and Plumbing engineering solutions.",
      icon: FaIndustry,
    },
    {
      title: "Safety Auditor",
      description: "Ensuring workplace safety and environmental compliance.",
      icon: FaLeaf,
    },
  ],
  Environment: [
    {
      title: "Environment Clearance",
      description: "Helping industries acquire environmental approvals.",
      icon: FaLeaf,
    },
    {
      title: "Green Building Certification",
      description: "Certification for sustainable, energy-efficient buildings.",
      icon: FaBuilding,
    },
    {
      title: "Consent from Pollution Board",
      description: "Legal compliance and permissions for industries.",
      icon: FaWater,
    },
  ],
};

export default function WeServe() {
  const [selectedTab, setSelectedTab] = useState("Engineering");
  const [selectedService, setSelectedService] = useState(null);

  // Define tab items for Ant Design Tabs
  const tabItems = [
    { key: "Engineering", label: "Engineering Services" },
    { key: "Environment", label: "Environmental Services" },
  ];

  return (
    <ParallaxProvider>
      <div className="w-full relative mt-10 mx-auto bg-white shadow-even rounded-2xl p-2 flex flex-col md:w-[86%] md:p-8 text-center">
        {/* Section Title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold">We Serve</h1>
        </div>

        <Tabs
          defaultActiveKey="Engineering"
          centered
          size="large"
          items={tabItems}
          onChange={(key) => {
            setSelectedTab(key);
            setSelectedService(null);
          }}
          tabBarStyle={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            padding: "10px",
          }}
          moreIcon={null}
        />

        {/* Services List */}
        <div className="space-y-3 mt-4">
          {servicesData[selectedTab].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Parallax speed={-3}>
                <div
                  className="p-4 shadow-lg rounded cursor-pointer bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
                  onClick={() =>
                    setSelectedService(
                      selectedService === service ? null : service
                    )
                  }
                >
                  <div className="flex items-center gap-3">
                    {React.createElement(service.icon, {
                      className: "text-2xl text-blue-500",
                    })}
                    <span className="font-semibold">{service.title}</span>
                  </div>
                  {selectedService === service ? (
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </Parallax>
            </motion.div>
          ))}
        </div>

        {/* Selected Service Details */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 rounded bg-gray-50 shadow-lg"
          >
            <h2 className="text-xl font-semibold">{selectedService.title}</h2>
            <p className="mt-2 text-gray-600">{selectedService.description}</p>
          </motion.div>
        )}
      </div>
    </ParallaxProvider>
  );
}
