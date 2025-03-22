import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import Carousel from "@/components/Carousel/Carousel";

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
import ProjectDetailSection from "./ProjectDetailSection";

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

const credentials = [
  {
    id: 1,
    description:
      "Industrial building Works - Civil, Purchase, Erection, installation and commissioning of Plant and Machinery for City of Pharmay Pvt Ltd",
    capacity: "5000 Sqm",
    client: "City of Pharmay Pvt Ltd",
    image: "",
  },
  {
    id: 2,
    description:
      "Augmentation of ETP at Rubber Park, Irapuram, Ernakulam - Construction and commissioning of 250cum/day capacity Common Effluent Treatment Plant Equivalent to 1.5 MLD STP",
    capacity: "250 KLD",
    client: "KINFRA (Kerala Industrial Infrastructure Development Corporation)",
    image: Kinfra,
  },
  {
    id: 3,
    description:
      "Construction of Sewage Treatment Plant (STP) using SBR Technology near existing STP at building No. 37A at SAC, Ahmedabad – Civil works for STP including pumps, diffused air system & filters etc.",
    capacity: "115 KLD",
    client:
      "Government Of India, Department Of Space, Space Applications Centre",
    image: "",
  },
  {
    id: 4,
    description:
      "Construction Of 200 KLD Sewage Treatment in the Multistoried Building of Sassoon General Hospital and B. J. Medical College Pune",
    capacity: "200 KLD",
    client: "PUNE PUBLIC WORKS DIVISION, PUNE",
    image: "",
  },
  {
    id: 5,
    description:
      "CONSTRUCTION OF 200 KLD SEWAGE TREATMENT IN THE MULTISTORIED BUILDING OF SASSOON GENERAL HOSPITAL AND B. J. MEDICAL COLLEGE PUNE",
    capacity: "115 KLD",
    client: "PUBLIC WORKS REGION, PUNE",
    image: "",
  },
  {
    id: 6,
    description:
      "Design, Supply, Installation, Testing and commissioning of Effluent treatment Plant on turnkey basis",
    capacity: "50 KLD",
    client:
      "Security Printing and Mining Corporation of India Limited, India Security Press, Nashik",
    image: "",
  },
  {
    id: 7,
    description:
      "Design, Supply, erection, successful commissioning for 45 KLD Winery Effluent treatment Plant at Bangalore Plant",
    capacity: "45 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 8,
    description:
      "Design, Supply, erection, successful commissioning of primary treatment & sludge handling system for upgradation of 90 KLD Winery Effluent treatment Plant at Nashik Plant",
    capacity: "90 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 9,
    description:
      "Design of 30 KLD Upflow anaerobic Bioreactor, 120 KLD Membrane Bioreactor and sludge handling system for upgradation of Existing Winery Effluent treatment Plant at Dindori Plant",
    capacity: "120 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 10,
    description:
      "Design, Supply, erection, successful commissioning of 1000KLD Sewage treatment Plant at Nashik",
    capacity: "1000 KLD",
    client: "Sun Infrastructure Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 11,
    description:
      "Design, Supply, erection, successful commissioning of 30 KLD Effluent treatment Plant at Artisan Spirit Pvt Ltd, Nashik",
    capacity: "30 KLD",
    client: "Artisan Spirit Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 12,
    description:
      "Design, Supply, erection, successful commissioning of 27KLD Effluent treatment Plant at Nashik",
    capacity: "27 KLD",
    client: "Magnum Heart Institute, Nashik",
    image: "",
  },
  {
    id: 13,
    description:
      "Design, Supply, erection, successful commissioning of 65KLD Sewage treatment Plant at Nashik",
    capacity: "65 KLD",
    client: "Chopda Medicare & Research Centre Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 14,
    description: "DPR preparation for Upgradation of Tapovan & Agartakli STP",
    capacity: "130 MLD / 110 MLD",
    client: "Nashik Municipal Corporation",
    image: "",
  },
  {
    id: 15,
    description:
      "Design, Supply, erection, successful commissioning of package 15 KLD Sewage treatment Plant at Ekdara Hospital of SMBT, Nagar",
    capacity: "15 KLD",
    client: "SMBT, Ekdara, Ahmednagar",
    image: "",
  },
  {
    id: 16,
    description:
      "Design, Supply, erection, successful commissioning of package 1500 KLD Sewage Pumping Station at SMBT, Nashik",
    capacity: "1500 KLD",
    client: "SMBT, Nandi Hills, Nashik",
    image: "",
  },
  {
    id: 17,
    description:
      "Design, Supply, erection, successful commissioning of package 12 KLD Sewage treatment Plant at Suyojit Baug, Nashik",
    capacity: "12 KLD",
    client: "Sun Infrastructure Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 18,
    description:
      "Consultancy Services for preparing Basic engineering package and GA drawing preparation for 4 MLD SPS & STP for Dombivali MIDC, Dombivali",
    capacity: "4.0 MLD",
    client: "MIDC, Dombivali",
    image: "",
  },
  {
    id: 19,
    description:
      "Consultancy Services for preparing Basic engineering package and GA drawing preparation for 40 MLD SPS for Jodhpur Municipal Corporation, Jodhpur",
    capacity: "40.0",
    client: "Jodhpur Municipal Corporation, Jodhpur",
    image: "",
  },
  {
    id: 20,
    description:
      "Consultancy Services for preparing DPR for 7.0 MLD STP for Ambad Municipal Council, Ambad, Jalana",
    capacity: "7.0",
    client: "CIDCO",
    image: "",
  },
  {
    id: 21,
    description:
      "Consultancy Services for detail engineering of STP for Heesargatta, Banglore drainage scheme.",
    capacity: "5.0",
    client: "BWSSB",
    image: "",
  },
  {
    id: 22,
    description:
      "Consultancy Services for preparing DPR for Sewage Treatment Plant (STP) of capacity 6.2 MLD for Indapur Underground Sewerage Scheme Dist. Pune",
    capacity: "6.2",
    client: "Indapur Municipal Council, Indapur, Pune",
    image: "",
  },
];

function Projects() {
  const renderCardImage = (image) =>
    image ? (
      <img
        src={image}
        alt="Project"
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
    ) : (
      <div className="w-full h-40 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
    );

  return (
    <div className="mt-8">
      {/* <h2 className="text-2xl font-bold mb-6">Credentials</h2> */}
      <ProjectDetailSection credentials={credentials} />
      <Carousel data={images} />
    </div>
  );
}

export default Projects;
