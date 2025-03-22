import React, { useState } from "react";
import { Tabs, Card, Button } from "antd";
import { motion } from "framer-motion";
import { FaIndustry, FaLeaf, FaWater, FaBuilding } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { FaArrowRightLong } from "react-icons/fa6";

const { TabPane } = Tabs;

const engineeringServices = [
  { title: "Urban Infrastructure Planning", icon: FaBuilding },
  { title: "Water & Wastewater Management", icon: FaWater },
  { title: "MEP Works", icon: FaIndustry },
  { title: "Safety Auditor", icon: FaLeaf },
];

const environmentServices = [
  { title: "Environment Clearance", icon: FaLeaf },
  { title: "Green Building Certification", icon: FaBuilding },
  { title: "Consent from Pollution Board", icon: FaWater },
];

export default function ServicesSection() {
  const [selectedTab, setSelectedTab] = useState("Engineering");

  return (
    <ParallaxProvider>
      <div className="bg-gray-100">
        {/* Hero Section */}
        <div
          className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-center p-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Empowering Engineering & Environmental Solutions
            </h1>
            <p className="mt-4 text-lg">
              Innovative, cost-effective, and sustainable solutions for a better
              tomorrow.
            </p>
            <Button
              type="primary"
              size="large"
              className="mt-6 bg-blue-600 border-none"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

          {/* Ant Design Tabs */}
          <Tabs
            defaultActiveKey="Engineering"
            centered
            size="large"
            onChange={(key) => setSelectedTab(key)}
          >
            <TabPane tab="Engineering Division" key="Engineering" />
            <TabPane tab="Environment Division" key="Environment" />
          </Tabs>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          >
            {(selectedTab === "Engineering"
              ? engineeringServices
              : environmentServices
            ).map((service, index) => (
              <Parallax key={index} speed={-5}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    hoverable
                    className="text-center p-6 shadow-lg transition-transform duration-300"
                  >
                    {React.createElement(service.icon, {
                      className: "text-5xl text-blue-500 mb-3",
                    })}
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </Card>
                </motion.div>
              </Parallax>
            ))}
          </motion.div>
        </div>

        <div className=" text-gray-800 py-12 max-w-[1000px] bg-white rounded-3xl  text-center flex flex-col md:flex-row justify-center items-center gap-4  mx-auto my-20 ">
          <div className="px-10 flex justify-center flex-col items-start gap-2 ">
            <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
              Lets Work
              <span className=" m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                Together
              </span>
              Now
            </h3>
            <p className="text-blue-700 font-extrabold text-xl">
              Call: +91-9970436943{" "}
              <span className="text-gray-500">
                (9:00 AM - 6:00 PM IST) INDIA IST
              </span>
            </p>
            <p className="text-blue-700 font-extrabold text-xl">
              Email: envocares@gmail.com
              <span className="text-gray-500"> </span>
            </p>
            <p className="mt-2 text-xl">
              Reach out to us for your engineering and environmental needs.
            </p>
          </div>

          <div className="">
            <div
              type="default"
              size="large"
              className="bg-blue-400 text-white font-bold text-2xl rounded-lg flex py-3 px-6  gap-2 justify-center items-center active:scale-95 mx-10"
            >
              <div>Get In Touch</div>
              <div>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
