import React from "react";
import CoreServices from "./CoreServices";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Counter from "./Counter";
import {
  CIIDCO,
  DeolaliBoard,
  ISP,
  ISRO,
  Kinfra,
  MAGNUM,
  MinistryDef,
  nskCorp,
  PWD,
  ResearchSociety,
  SMBT,
  Sula,
  vikasPrerna,
  WapcoSs,
  York,
} from "../../../public/assets";
import Carousel from "@/components/Carousel/Carousel";
import VideoSection from "./VideoSection";
import ServicesSection from "./Services";
import Testimonials from "./Testimonials";

const images = [
  { name: "CIIDCO", src: CIIDCO },
  { name: "DeolaliBoard", src: DeolaliBoard },
  { name: "ISP", src: ISP },
  { name: "ISRO", src: ISRO },
  { name: "Kinfra", src: Kinfra },
  { name: "MAGNUM", src: MAGNUM },
  { name: "MinistryDef", src: MinistryDef },
  { name: "nskCorp", src: nskCorp },
  { name: "PWD", src: PWD },
  { name: "ResearchSociety", src: ResearchSociety },
  { name: "SMBT", src: SMBT },
  { name: "Sula", src: Sula },
  { name: "vikasPrerna", src: vikasPrerna },
  { name: "WapcoSs", src: WapcoSs },
  { name: "York", src: York },
];

function Home() {
  return (
    <div className="">
      <HeroSection />
      <VideoSection />
      <Counter />
      <Carousel data={images} />
      <FeatureSection />
      <ServicesSection />
      <Testimonials />
    </div>
  );
}

export default Home;
