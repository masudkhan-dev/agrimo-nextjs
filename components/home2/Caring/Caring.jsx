import Image from "next/image";
import React from "react";

//  custom css
import "./Caring.css";

// react icons
import { FaArrowDown } from "react-icons/fa";

// react fst marquee
import Marquee from "react-fast-marquee";

// image
import caringBG from "@/public/home2-asset/yello-bg.png";
import caringIcon from "@/public/home2-asset/caring-icon.png";
import caringIMG1 from "@/public/home2-asset/caring-img2.png";
import caringIMG2 from "@/public/home2-asset/orange-man.png";
import caringIMG3 from "@/public/home2-asset/caring-img3.png";
import arrow from "@/public/home2-asset/arrow-top.png";

import agriculture from "@/public/home1-asset/Agriculture.png";
import farming from "@/public/home1-asset/Farming.png";
import organic from "@/public/home1-asset/Organic.png";
import vegetables from "@/public/home1-asset/Vegetables.png";

const Caring = () => {
  const images = [
    { src: agriculture, alt: "Agriculture" },
    { src: farming, alt: "Farming" },
    { src: organic, alt: "Organic" },
    { src: vegetables, alt: "Vegetables" },
  ];

  return (
    <main>
      <div className="container mx-auto px-3 lg:px-0">
        <div
          style={{
            backgroundImage: `url(${caringBG.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="p-6 py-12"
        >
          {/* top */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center space-y-4 text-center">
            <div className="flex items-center space-x-4">
              <Image
                src={caringIcon}
                width={100}
                height={100}
                alt="Caring icon"
              />
              <div>
                <p className="text-sm md:text-base agrimo">
                  Any questions? Reach us at
                </p>
                <p className="text-sm md:text-base agrimo">
                  <span className="text-sm md:text-base underline agrimo">
                    966 355 965 57
                  </span>{" "}
                  - Toll free
                </p>
              </div>
            </div>

            <div className="text-xl">
              <button className="bg-white p-4 rounded-full animate-bounce">
                <FaArrowDown className="text-[#404a3e]" />
              </button>
            </div>

            <div className="flex items-center text-left md:-ml-32">
              <div>
                <p className="text-sm md:text-base agrimo">
                  Agriculture Matters to
                </p>
                <p className="text-sm md:text-base agrimo">
                  the Future of Development
                </p>
              </div>
              <Image
                src={caringIMG1}
                width={300}
                height={300}
                alt="Caring image"
                className="md:ml-10"
              />
            </div>
          </div>

          {/* bottom */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 bg-white rounded-lg p-5 md:p-p12">
            <div>
              <Image
                src={caringIMG2}
                width={600}
                height={600}
                alt="Caring image"
              />
            </div>
            <div>
              <div>
                <Image
                  src={caringIMG3}
                  width={600}
                  height={600}
                  alt="Caring image"
                />
              </div>
              <div>
                <h2 className="text-[#404a3e] font-bold text-xl md:text-3xl agrimo my-4">
                  We're Committed to Caring.
                </h2>
                <p className="text-[#666666] text-sm">
                  Greetings from Dosner Organic Farms.We distribute only organic{" "}
                  <br />
                  herbs and produce directly to consumers.
                </p>
              </div>
              <div className="my-5">
                {/* using some custom css in global.css */}
                <ul className="grid grid-cols-1 md:grid-cols-2 lst">
                  <li className="text-sm md:text-base agrimo">
                    Gourmet Mushrooms
                  </li>
                  <li className="text-sm md:text-base agrimo">
                    Natural Healthy Products
                  </li>
                  <li className="text-sm md:text-base agrimo">
                    Lavender Farming
                  </li>
                  <li className="text-sm md:text-base agrimo">
                    Best Quality Standards
                  </li>
                  <li className="text-sm md:text-base agrimo">
                    Fertilizer Distribution
                  </li>
                  <li className="text-sm md:text-base agrimo">
                    Organic Fertilizer
                  </li>
                </ul>
              </div>
              <div>
                <button className="flex items-center bg-[#5c8b54] px-5 py-3 rounded-full text-white agrimo text-base gap-2">
                  Know More{" "}
                  <Image
                    src={arrow}
                    width={15}
                    height={15}
                    alt="Caring arrow icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
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
      </div>
    </main>
  );
};

export default Caring;
