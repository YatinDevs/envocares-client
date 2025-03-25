import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Button, Form, Card } from "antd";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";

const { TextArea } = Input;

const Contact = () => {
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/contact-details")
      .then((response) => {
        setContactData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching contact details:", error);
        setLoading(false);
      });
  }, []);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/contact-submit",
        values
      );
      console.log(response);
      message.success("Message sent successfully!");
    } catch (error) {
      message.error("Failed to send message. Please try again.");
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  if (!contactData)
    return (
      <p className="text-center text-red-500">No contact details found.</p>
    );

  const contactDetails = [
    {
      icon: <PhoneOutlined className="text-blue-600 text-2xl mr-4" />,
      info: `${contactData.phone_1} ${
        contactData.phone_2 ? ` | ${contactData.phone_2}` : ""
      }`,
    },
    {
      icon: <MailOutlined className="text-blue-600 text-2xl mr-4" />,
      info: contactData.email,
    },
    {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl mr-4" />,
      info: contactData.office_address,
    },
    contactData.branch_address && {
      icon: <EnvironmentOutlined className="text-blue-600 text-2xl mr-4" />,
      info: contactData.branch_address,
    },
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r mt-18 from-orange-0 via-orange-50 to-orange-200"
    >
      <ContentWrapper>
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
            {/* Contact Details Section */}
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
                      <div className="shadow-md bg-white hover:scale-95 rounded-2xl flex justify-center items-center p-4">
                        <div> {detail.icon} </div>
                        <div>{detail.info}</div>
                      </div>
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
                <div className="flex justify-center items-center space-x-4">
                  <motion.div className="text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4">
                    <IoCallOutline />
                  </motion.div>
                  <div className="">
                    <p className="text-blue-900 text-md md:text-lg">
                      Call Us On
                    </p>
                    <p className="text-gray-700">
                      {contactData.phone_1} | {contactData.phone_2}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <motion.div className="text-blue-900 text-lg md:text-2xl border border-[#00afe9] rounded-full flex justify-center items-center p-4">
                    <TfiEmail />
                  </motion.div>
                  <div>
                    <p className="text-[#274584] text-md md:text-lg">
                      Leave a message
                    </p>
                    <p className="text-gray-700">{contactData.email}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div className="w-full">
              <div className="shadow-md p-5 py-10 bg-white rounded-3xl">
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
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Contact"
                    rules={[
                      {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit contact number!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your contact number" />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: "Please enter your message!" },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Write your message here..."
                    />
                  </Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full">
                    Submit
                  </Button>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </ContentWrapper>
    </motion.div>
  );
};

export default Contact;
