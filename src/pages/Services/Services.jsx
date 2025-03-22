import React from "react";
import AboutDetailSection from "../Aboutus/AboutDetailSection";
import CTA from "./CTA";
import WeServe from "./WeServe";
import ServiceHeroSection from "./ServiceHeroSection";
import AboutService from "./AboutService";
import Testimonials from "./Testimonials";

function Services() {
  return (
    <div>
      <ServiceHeroSection />
      <AboutService />
      <AboutDetailSection />
      <WeServe />
      <CTA />
      <Testimonials />
    </div>
  );
}

export default Services;
