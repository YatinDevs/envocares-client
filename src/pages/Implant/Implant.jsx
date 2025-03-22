import React from "react";
import { useState } from "react";
import { Button, Input, Select, Form, Checkbox, Card } from "antd";
import { FaMoneyBill, FaLaptop, FaUserTie, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function Implant() {
  const [form] = Form.useForm();

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">RichSOL</h1>
        <Button type="primary" className="bg-red-500">
          Our Courses
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src="/hero-image.jpg"
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold">
          Empower Your Future: Get Career Ready With RichSOL!
        </div>
      </div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto mt-8 p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Empower Your Future</h2>
          <Form
            layout="vertical"
            form={form}
            className="grid grid-cols-2 gap-4"
          >
            <Form.Item
              name="studentName"
              label="Student Name"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Student Name *" />
            </Form.Item>
            <Form.Item
              name="contactNumber"
              label="Contact Number"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Contact Number *" />
            </Form.Item>
            <Form.Item
              name="dob"
              label="Date of Birth"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input type="date" placeholder="Date of Birth *" />
            </Form.Item>
            <Form.Item
              name="whatsapp"
              label="WhatsApp Number"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="WhatsApp Number *" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email ID"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Email ID *" />
            </Form.Item>
            <Form.Item
              name="college"
              label="College"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select College *">
                <Select.Option value="college1">College 1</Select.Option>
                <Select.Option value="college2">College 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="branch"
              label="Branch"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select Branch *">
                <Select.Option value="branch1">Branch 1</Select.Option>
                <Select.Option value="branch2">Branch 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="year"
              label="In Which Year You Are"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select Year *">
                <Select.Option value="year1">Year 1</Select.Option>
                <Select.Option value="year2">Year 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="technology"
              label="Select Your Technology"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select Technology *">
                <Select.Option value="tech1">Technology 1</Select.Option>
                <Select.Option value="tech2">Technology 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select Location *">
                <Select.Option value="location1">Location 1</Select.Option>
                <Select.Option value="location2">Location 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="mode"
              label="Mode"
              rules={[{ required: true, message: "Required" }]}
            >
              <Select placeholder="Select Mode *">
                <Select.Option value="mode1">Mode 1</Select.Option>
                <Select.Option value="mode2">Mode 2</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="captcha" valuePropName="checked">
              <Checkbox>I'm not a robot</Checkbox>
            </Form.Item>
            <Form.Item className="col-span-2">
              <Button type="primary" className="w-full bg-red-500">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </motion.div>

      {/* Features Section */}
      <div className="flex justify-around mt-8">
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <FaUserTie size={40} className="text-red-500 mx-auto" />
          <p>One-on-One Mentorship</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <FaMoneyBill size={40} className="text-red-500 mx-auto" />
          <p>Affordable Fees</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <FaLaptop size={40} className="text-red-500 mx-auto" />
          <p>Lab with AC</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="text-center">
          <FaUsers size={40} className="text-red-500 mx-auto" />
          <p>Corporate Networking</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Implant;
