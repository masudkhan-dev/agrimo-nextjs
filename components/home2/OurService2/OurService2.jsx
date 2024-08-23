"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

// custom css
import "./OurService2.css";

// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

// images
import icons from "@/public/home1-asset/Icon.png";
import OS1 from "@/public/home2-asset/OS1.png";
import OS2 from "@/public/home2-asset/OS2.png";
import OS3 from "@/public/home2-asset/OS3.png";
import OS4 from "@/public/home2-asset/OS4.png";
import arrow from "@/public/home2-asset/Link.png";

const slides = [
  { title: "Fertilizer", text: "Harvest Concepts", image: OS1 },
  { title: "Fruits", text: "Farming Products", image: OS2 },
  { title: "Fertilizer", text: "Soil fertilization", image: OS3 },
  { title: "Fruits", text: "Fresh vegetables", image: OS4 },
  { title: "Fertilizer", text: "Farming Products", image: OS2 },
];

const OurService2 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (swiper) {
    }
  }, []);

  return (
    <main className="bg-[#f8f7f0] py-10">
      <div className="container mx-auto px-4 lg:px-0">
        {/* header */}
        <header className="flex flex-col items-center gap-4 mb-10">
          <button className="flex items-center bg-white px-4 py-2 rounded-2xl shadow-xl gap-2">
            <Image src={icons} width={20} height={20} alt="who we are icons" />
            <p className="text-base font-bold text-[#404a3f] agrimo">
              Our Service
            </p>
          </button>
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#404a3e] agrimo">
            Best Agriculture Services
          </h2>
        </header>

        {/* body */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          modules={[FreeMode, Autoplay, Pagination]}
          ref={swiperRef}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="py-5">
              <section className="bg-white p-6 rounded-2xl shadow-lg relative">
                <div className="absolute -top-6 -right-3 bg-[#f8f7f0] p-3 rounded-full">
                  <button className="p-2">
                    <Image src={arrow} width={50} height={50} alt="Arrow img" />
                  </button>
                </div>
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={slide.image}
                    width={200}
                    height={200}
                    alt="Slide img"
                    className="rounded-full border-4 border-[#5c8b54]"
                  />
                </div>
                <ul className="flex flex-col items-center ul">
                  <li className="disc font-bold text-sm text-[#999999] uppercase">
                    {slide.title}
                  </li>
                  <li className="font-bold text-base text-[#404a3e]">
                    {slide.text}
                  </li>
                </ul>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default OurService2;
