import React from "react";
import Navbar from "./Navbar";
import Footer from './ui/Footer';

export interface BiographySection {
  heading: string;
  information: string;
  image: string;
  position: "left" | "right";
}

interface BiographyProps {
  sections: BiographySection[];
}

const Biography: React.FC<BiographyProps> = ({ sections }) => {
  return (
    <div className="max-w-[90%] mx-auto sm:px-6 lg:px-8 py-12">
      <Navbar/>
      {sections.map((section, index) => {
        const imageFloatClass =
          section.position === "left"
            ? "float-left sm:mr-4 md:mr-5 mr-3"
            : "float-right sm:ml-4 md:ml-5 ml-2 ";

        return (
          <div
            key={index}
            className=" sm:mb-4 md:mb-6 after:clear-both after:block after:content-['']"
          >
            <img
              src={section.image}
              alt={section.heading}
              className={`${imageFloatClass} w-[45%] rounded-xl mt-5 max-h-96 min-h-60 mb-1`}
            />
            <h1
              className="text-left -ml-2 md:text-4xl sm:text-2xl text-xl "
              style={{
                fontFamily: "Montserrat",
                letterSpacing: ".06em",
              }}
            >
              {section.heading}
            </h1>
            <p
              className="text-left text-xs sm:text-sm md:text-base "
              style={{
                fontFamily: "Montserrat, Poppins, sans-serif",
                lineHeight: "1.6em",
                color: "rgb(87, 87, 87)",
              }}
            >
              {section.information}
            </p>
          </div>
        );
      })}
      <Footer/>
    </div>
  );
};

export default Biography;
