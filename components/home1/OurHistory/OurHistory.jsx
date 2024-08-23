import React from "react";
import Image from "next/image";

// react fast marquee
import Marquee from "react-fast-marquee";

// images
import OH1 from "@/public/home1-asset/1987.png";
import OH2 from "@/public/home1-asset/1995.png";
import OH3 from "@/public/home1-asset/2000.png";
import OH4 from "@/public/home1-asset/1910.png";
import icon from "@/public/home1-asset/Icon.png";
import bg1 from "@/public/home1-asset/OH-bg.png";
import bg2 from "@/public/home1-asset/OH-bg-2.png";
import card from "@/public/home1-asset/card2.png";
import { TfiArrowTopRight } from "react-icons/tfi";

const Timeline = () => {
  const events = [
    {
      image: OH1,
      title: "Open my Farm",
      description:
        "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
    {
      image: OH2,
      title: "Farm Remodeling",
      description:
        "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
    },
    {
      image: OH3,
      title: "Grainfarmers Formed",
      description:
        "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit.",
    },
    {
      image: OH4,
      title: "Start of Agriculture",
      description:
        "Consequatur magni Corrupti ut minus! Iusto eos consectetur similique minus culpa odio temporibus.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <Marquee gradientWidth={50} speed={30}>
        <div className="flex items-center space-x-5 md:space-x-10 relative">
          {/* Timeline line */}
          <div className="absolute w-full h-1 bg-[#d3d4cc] top-1/2 transform -translate-y-1/2"></div>

          {/* Timeline*/}
          {events.map((event, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start w-80"
            >
              <div className="relative z-10 mt-16">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-32 md:w-40 h-10 md:h-12"
                />
              </div>

              {/* Dot */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[#5c8b54] z-10 border-4 border-white"></div>

              {/* Lower value */}
              <div className="text-left mt-28 w-full">
                <h2 className="text-2xl md:text-3xl agrimo font-bold text-[#404a3e] mb-2">
                  {event.title}
                </h2>
                <p className="text-sm md:text-base text-[#666666] text-justify mr-16 md:mr-0">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

const OurHistory = () => {
  return (
    <main className="py-16 bg-[#f8f7f0]">
      <div className="container mx-auto px-4">
        <header>
          <div>
            <button className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xl">
              <Image src={icon} width={20} height={20} alt="section icon" />
              <p className="text-sm agrimo">Our History</p>
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-5">
            <h2 className="text-2xl md:text-4xl font-bold agrimo text-[#404a3e] md:w-[35%]">
              Farming has been since 1866
            </h2>
            <p className="text-base agrimo md:w-[45%] text-justify">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>
          </div>
        </header>

        {/* timeline */}
        <Timeline />

        {/* section */}
        <section className="flex flex-col justify-center items-center mt-16 relative">
          <div className="relative z-10">
            <Image
              src={bg2}
              width={1200}
              height={600}
              alt="Background pattern"
              className="absolute"
            />
            <Image
              src={bg1}
              width={1200}
              height={600}
              alt="Main background image"
              className="relative"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-around z-20 mt-5">
            <div className="flex items-center space-x-4">
              <Image
                src={card}
                alt="Card icon"
                className="w-10 h-10 md:w-20 md:h-20 md:-ml-10"
              />
              <div className="">
                <h2 className="text-base md:text-3xl agrimo font-bold leading-tight text-white">
                  We&#39;re popular leader in
                  <br />
                  agriculture market globally
                </h2>
              </div>
            </div>
            <button className="inline-flex items-center bg-white px-2 py-2 md:px-5 md:py-3 rounded-3xl agrimo text-[8px] md:text-sm hover:bg-gray-100 transition-colors">
              Discover More
              <TfiArrowTopRight className="text-black md:text-base" />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default OurHistory;
