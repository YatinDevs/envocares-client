import { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import Location from "../Aboutus/Location";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(target / (duration / 50));

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TOTAL SERVICE, SUPPORT, SECURITY
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ion Exchange is one of the largest comprehensive service providers for
        water & waste water management, symbolizing value addition with single
        point responsibility.
      </motion.p>
      <Row gutter={[16, 16]} className="mt-10">
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg rounded-lg p-6">
              <h3 className="text-blue-600 text-4xl font-bold">
                <Counter target={35} />+
              </h3>
              <p className="text-gray-600">Service Centres Globally</p>
            </Card>
          </motion.div>
        </Col>
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg rounded-lg p-6">
              <h3 className="text-blue-600 text-4xl font-bold">
                <Counter target={1500} />+
              </h3>
              <p className="text-gray-600">Trained Service Personnel</p>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <motion.div
        className="mt-10 p-6 bg-gray-100 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold">Digital 24/7 Service</h3>
        <p className="text-gray-600 mt-2">
          Our integrated services cover every aspect of your water treatment
          plant’s performance to give you a complete package of benefits.
        </p>
      </motion.div>
      <Location />
    </div>
  );
};

export default ServicesSection;
