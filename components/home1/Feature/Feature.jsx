import React from "react";
import Image from "next/image";

// react fst marquee
import Marquee from "react-fast-marquee";

// images
import agriculture from "@/public/home1-asset/Agriculture.png";
import farming from "@/public/home1-asset/Farming.png";
import organic from "@/public/home1-asset/Organic.png";
import vegetables from "@/public/home1-asset/Vegetables.png";

const Feature = () => {
  const images = [
    { src: agriculture, alt: "Agriculture" },
    { src: farming, alt: "Farming" },
    { src: organic, alt: "Organic" },
    { src: vegetables, alt: "Vegetables" },
  ];

  return (
    <section className="bg-[#f8f7f0] flex flex-col">
      <div className="flex-grow flex flex-col justify-center ">
        <Marquee speed={40}>
          <div className="flex items-center gap-4 md:gap-8">
            {images.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative w-52 h-52 md:w-72 md:h-72">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    className="object-contain"
                  />
                </div>
                <span className="text-3xl md:text-7xl text-[#5c8b54] mx-3 md:mx-5">
                  *
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Feature;
