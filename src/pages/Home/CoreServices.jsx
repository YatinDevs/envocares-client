import { CheckCircle2 } from "lucide-react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const coreServices = [
  {
    title: "Environmental Engineering & Infrastructure",
    description:
      "Comprehensive solutions for urban infrastructure, water treatment, solid waste management, and sustainable development.",
  },
  {
    title: "Water & Wastewater Management",
    description:
      "Expertise in designing and implementing STPs, ETPs, ZLD systems, and rainwater harvesting solutions.",
  },
  {
    title: "Green Building & Sustainable Solutions",
    description:
      "Innovative eco-friendly designs and consultation for IGBC & GRIHA-certified green buildings.",
  },
  {
    title: "Solid Waste & Bio-Composting",
    description:
      "Advanced waste management systems, including bio-digesters and sustainable composting solutions.",
  },
  {
    title: "Safety Audits & Compliance",
    description:
      "Certified safety audits and compliance consulting to meet industrial and environmental regulations.",
  },
];
const CoreServices = () => {
  return (
    <ContentWrapper>
      <div className="mt-20 text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
        <h3 className="font-palanquin my-10 text-center text-2xl md:text-4xl font-bold">
          Our
          <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
            Core
          </span>
          Services
        </h3>
        <div className="flex flex-col">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="w-full p-4 transform  transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6 shadow-md  bg-white border-neutral-700 rounded-xl text-center">
                <CheckCircle2 className="text-orange-500 w-10 h-10 mx-auto mb-4 transition-transform duration-300 hover:rotate-6" />
                <h3 className="text-lg md:text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-xs md:text-lg text-neutral-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CoreServices;
