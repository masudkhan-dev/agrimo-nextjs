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

// react icons
import { FaAngleLeft, FaAngleRight, FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarMonth, MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

// images
import icons from "@/public/home1-asset/Icon.png";
import LP1 from "@/public/home1-asset/LP1.png";
import LP2 from "@/public/home1-asset/LP2.png";
import LP3 from "@/public/home1-asset/LP3.png";
import btn from "@/public/home1-asset/Link.png";

// slide info
const slides = [
  {
    text: "What technology is used in vertical farming?",
    name: "Admin",
    date: "March 28. 2024",
    image: LP1,
  },
  {
    text: "Which type of farming is more prevalent today?",
    name: "Admin",
    date: "April 20. 2023",
    image: LP2,
  },
  {
    text: "The Farmers Sentiment Darkens Hopes Fade",
    name: "Admin",
    date: "January 02. 2022",
    image: LP3,
  },
  {
    text: "What technology is used in vertical farming?",
    name: "Admin",
    date: "December 16. 2021",
    image: LP1,
  },
  {
    text: "Which type of farming is more prevalent today?",
    name: "Admin",
    date: "July 28. 2022",
    image: LP2,
  },
];

const LatestBlog = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => swiperRef.current.swiper.slidePrev();
  const handleNextClick = () => swiperRef.current.swiper.slideNext();

  return (
    <main className="bg-[#f8f7f0] pt-10">
      <div className="container mx-auto px-4 lg:px-0">
        {/* header */}
        <header className="flex flex-col gap-4 mb-10">
          <button className="flex items-center bg-white px-4 py-2 rounded-2xl w-fit gap-2 shadow-xl">
            <Image
              src={icons.src}
              width={20}
              height={20}
              alt="who we are icons"
              className="rounded-2xl"
            />
            <p className="text-base text-[#404a3e]  font-bold agrimo">
              Latest Blog
            </p>
          </button>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl md:text-5xl text-[#404a3e] font-extrabold agrimo">
              Latest posts & articles
            </h2>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                onClick={handlePrevClick}
                className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] hover:text-white transition shadow-xl"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNextClick}
                className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] hover:text-white transition shadow-xl"
              >
                <FaAngleRight />
              </button>
            </div>
          </div>
        </header>

        {/* body */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
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
            <SwiperSlide key={index} className="py-5">
              <section className="relative bg-white py-6 px-4 rounded-2xl shadow-lg">
                {/* Button at top-left corner */}
                <button className="absolute top-5 left-8 flex items-center bg-white px-3 py-1 rounded-2xl w-fit gap-2 shadow-xl z-10 mt-5 ">
                  <Image
                    src={icons.src}
                    width={20}
                    height={20}
                    alt="who we are icons"
                    className="rounded"
                  />
                  <p className="text-sm text-[#404a3e] font-bold agrimo ">
                    Latest Blog
                  </p>
                </button>

                {/* Slide image */}
                <Image
                  src={slide.image.src}
                  width={500}
                  height={500}
                  alt="Testimonial img"
                  className="rounded"
                />

                {/* Button at bottom-right corner */}
                <div className="absolute bottom-32 right-6 md:right-4 ">
                  <button className="">
                    <Image
                      src={btn}
                      width={40}
                      height={40}
                      alt="Additional button"
                      className="rounded"
                    />
                  </button>
                </div>

                {/* Date and Name */}
                <div className="flex justify-between mt-4">
                  <p className="flex items-center gap-2 text-[#666666] text-sm agrimo">
                    <MdOutlineCalendarMonth className="text-[#5c8b54] text-sm" />{" "}
                    {slide.date}
                  </p>
                  <p className="flex items-center gap-2 agrimo text-[#666666] text-sm agrimo">
                    <FaRegUser className="text-[#5c8b54] text-sm" />{" "}
                    {slide.name}
                  </p>
                </div>

                {/* Text */}
                <div className="flex items-center mt-4">
                  <p className="font-bold text-base md:text-xl agrimo text-[#404a3e]">
                    {slide.text}
                  </p>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* footer */}
      <section className="">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#efdc69] py-8 px-2 md:px-5 mt-10 md:mt-16 rounded">
          <div className="ml-5">
            <ul className="flex items-center justify-center gap-5">
              <li className="uppercase text-sm md:text-base agrimo list-disc text-[#404a3e]">
                Farmers
              </li>
              <li className="uppercase text-sm md:text-base agrimo list-disc text-[#404a3e]">
                Organic
              </li>
              <li className="uppercase text-sm md:text-base agrimo list-disc text-[#404a3e]">
                Foods
              </li>
              <li className="uppercase text-sm md:text-base agrimo list-disc text-[#404a3e]">
                Product
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start gap-2 md:gap-5 mt-3 md:mt-0">
            <div className="flex items-center gap-1.5 md:gap-3">
              <button className="bg-white p-3 rounded-full">
                <BiPhoneCall className="text-[#404a3e] text-base md:text-lg " />
              </button>
              <p className="text-sm md:text-base text-[#404a3e]">
                + 1(212) 255-511
              </p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <button className="bg-white p-3 rounded-full">
                <MdMailOutline className="text-[#404a3e]" />
              </button>
              <p className="text-sm md:text-base text-[#404a3e]">
                noreply@pbminfotech.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LatestBlog;
