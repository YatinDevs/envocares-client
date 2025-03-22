import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaRss,
    FaYoutube,
    FaInstagram,
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About Section */}
        <div>
          <img src="/logo.png" alt="Company Logo" className="mb-6 w-36" />
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            ABOUT COMPANY
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Milestones</li>
            <li>Manufacturing</li>
            <li>Investor Relations</li>
            <li>Awards</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">PRODUCTS</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Engineering</li>
            <li>Resins</li>
            <li>Specialty Chemicals</li>
            <li>Membranes</li>
            <li>Instruments & Automation</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">SERVICES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Operation & Maintenance</li>
            <li>Rehabilitation & Modification</li>
            <li>Consumables & Spares</li>
            <li>Audits & Consultancy</li>
            <li>Project Financing</li>
          </ul>
        </div>

        {/* Locations Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            OUR LOCATIONS
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>APAC</li>
            <li>Europe</li>
            <li>India</li>
            <li>Middle East</li>
            <li>North America</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center space-x-6">
          {socialIcons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer text-gray-400 hover:text-blue-400"
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-center flex flex-col justify-center items-start text-gray-300">
          <p>
            <IoLocationOutline size={20} className="inline mr-2" /> 123 Greenway
            Street, EcoCity, Earth
          </p>
          <p>
            <IoCallOutline size={20} className="inline mr-2" /> +91 9876543210
          </p>
          <p>
            <MdOutlineEmail size={20} className="inline mr-2" />{" "}
            support@envocare.com
          </p>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>
          © 2025 All Rights Reserved by Rich System Solution.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
