"use client";

// swiper js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

import Image from "next/image";

// custom css
import "./OurFarmer.css";

// react icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// images
import icons from "@/public/home1-asset/Icon.png";
import share from "@/public/home2-asset/share.png";
import farmer1 from "@/public/home2-asset/F1.png";
import farmer2 from "@/public/home2-asset/F2.png";
import farmer3 from "@/public/home2-asset/F3.png";
import farmer4 from "@/public/home2-asset/F4.png";
import farmer5 from "@/public/home2-asset/F3.png";

import rice from "@/public/home1-asset/Rice-logo.png";
import farm from "@/public/home1-asset/farm-logo.png";
import fresh from "@/public/home1-asset/fresh-logo.png";
import food from "@/public/home1-asset/food-logo.png";
import eco from "@/public/home1-asset/eco-product-logo.png";
import tracktor from "@/public/home1-asset/tracktor-logo.png";

// react fast marquee
import Marquee from "react-fast-marquee";

const slides = [
  { image: farmer1, title: "Ceo Owner", name: "Jacob Mersin" },
  { image: farmer2, title: "Supervisor", name: "Clara Henry" },
  { image: farmer3, title: "Manager", name: "Paula Den" },
  { image: farmer4, title: "Marketing", name: "Carla Hall" },
  { image: farmer5, title: "Irrigation Systems", name: "Watering" },
];

const OurFarmer = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <main className="bg-[#f8f7f0] mt-10">
      <div className="container mx-auto px-3 lg:px-0 py-5 md:py-16">
        <header className=" ">
          <div className="flex flex-col gap-3">
            <div>
              <button className="flex items-center bg-[#fff] px-3 py-2 rounded-2xl gap-2 mt-10 md:mt-5 shadow-xl">
                <Image
                  src={icons}
                  width={20}
                  height={20}
                  alt="who we are icons"
                  className="rounded-2xl"
                />
                <p className="text-base text-[#404a3f] agrimo">Our Farmers</p>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-5">
              <div>
                <h2 className="text-2xl md:text-6xl text-[#404A3D] font-extrabold agrimo">
                  Meet the Farmers
                </h2>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5 md:mt-0  ">
                <button
                  onClick={handlePrevClick}
                  className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] text-[#404a3e] hover:text-white transition-all duration-400"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNextClick}
                  className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] text-[#404a3e] hover:text-white transition-all duration-400"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* body */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[FreeMode, Autoplay]}
          ref={swiperRef}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <section className="mt-10">
                <div className="bg-white shadow-sm p-5 rounded-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={slide.image}
                      width={600}
                      height={450}
                      alt="Card image"
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <ul className="flex flex-col justify-center items-start">
                    <li className="text-sm agrimo text-[#999999] font-bold uppercase disc">
                      {slide.title}
                    </li>
                    <li className="text-xl md:text-2xl agrimo text-[#404a3e] font-extrabold">
                      {slide.name}
                    </li>
                  </ul>
                  <div className="flex flex-col items-start mt-4">
                    <div className="bg-[#f8f7f0] p-2 rounded-full absolute bottom-[-10px] md:bottom-[-12px] -right-2 md:-right-4 z-20">
                      <button className="rounded-full p-2">
                        <Image
                          src={share}
                          width={40}
                          height={40}
                          alt="Arrow icon"
                          className="object-contain "
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* footer */}
        <div className="border-t border-[#e6e6de] w-full my-16 md:my-20"></div>
        <div className="">
          <Marquee gradient={false} className="w-full">
            <div className="flex items-center  md:gap-5">
              <Image src={rice} width={150} height={75} alt="rice logo" />
              <Image src={farm} width={150} height={75} alt="farm logo" />
              <Image src={fresh} width={150} height={75} alt="fresh logo" />
              <Image src={food} width={150} height={75} alt="food logo" />
              <Image src={eco} width={150} height={75} alt="eco logo" />
              <Image
                src={tracktor}
                width={150}
                height={75}
                alt="tracktor logo"
              />
              <Image src={farm} width={150} height={75} alt="farm logo" />
              <Image src={fresh} width={150} height={75} alt="fresh logo" />
              <Image src={eco} width={150} height={75} alt="eco logo" />
            </div>
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default OurFarmer;
