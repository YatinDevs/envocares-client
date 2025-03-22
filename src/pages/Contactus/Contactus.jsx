import React from "react";
import { useEffect, useState } from "react";
import { Input, Button, Form, Card } from "antd";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const contactDetails = [
    {
      icon: <PhoneOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "+91 9970436943",
    },
    {
      icon: <MailOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "envocares@gmail.com",
    },
    {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "Main Office - 1903, Sapphire, Regency Tower, Ghodbunder Road,Thane (W).",
    },
    {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl mr-4" />,
      info: "Nashik Branch - 3, Archit Vihar, Shrirang Nagar, Gangapur Road, Nashik - 422 013 (M.S.).",
    },
  ];

  const navbarData = { caEmailid: "envocares@gmail.com" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r mt-18 rounded-2xl from-orange-100 via-orange-200 to-orange-400 "
    >
      <div className="p-4 md:p-8 w-full">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-blue-800 font-bold text-center mb-6"
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Location and Contact Details */}
          <div className="flex flex-col w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col lg:flex-row justify-center items-center gap-6"
            >
              <div className="w-full">
                <iframe
                  title="Google Map"
                  className="w-full h-110 text-2xl rounded-md border border-gray-300 shadow-sm"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9203686043675!2d73.76542404051962!3d20.011856581472518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9776aba275%3A0xcf7ba1b5d2616420!2sArchit%20Vihar%20Apartment!5e0!3m2!1sen!2sin!4v1742554911440!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Dynamic Contact Details */}
              <div className="grid gap-4 w-full">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card className="shadow-md flex items-center p-4">
                      {detail.icon}
                      <span>{detail.info}</span>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <br />

            {/* Call Us & Leave a Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full bg-blue-800 flex flex-col gap-3 justify-center items-start text-xs md:flex-row md:justify-around md:items-center p-2 py-4 rounded-2xl text-transparent bg-clip-text"
            >
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
                >
                  <IoCallOutline />
                </motion.div>
                <div>
                  <p className="text-blue-900 text-md md:text-lg">Call Us On</p>
                  <p className="text-gray-700">9403455116 | 9403455280</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500 hover:text-blue-500"
                >
                  <TfiEmail />
                </motion.div>
                <div>
                  <p className="text-[#274584] text-md md:text-lg">
                    Leave a message
                  </p>
                  <p className="text-gray-700">{navbarData?.caEmailid}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full "
          >
            <Card className="shadow-md">
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  {" "}
                  <Input placeholder="Enter your email" />{" "}
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message!" },
                  ]}
                >
                  {" "}
                  <TextArea
                    rows={4}
                    placeholder="Write your message here..."
                  />{" "}
                </Form.Item>
                <div className="flex justify-between">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="reset" danger>
                    Reset
                  </Button>
                </div>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
