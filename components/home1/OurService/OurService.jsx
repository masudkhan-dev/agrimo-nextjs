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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// images
import icons from "@/public/home1-asset/Icon.png";
import arrow from "@/public/home1-asset/Link.png";
import service1 from "@/public/home1-asset/service1.png";
import service2 from "@/public/home1-asset/service2.png";
import service3 from "@/public/home1-asset/service3.png";
import service4 from "@/public/home1-asset/service2.png";
import service5 from "@/public/home1-asset/service3.png";

const slides = [
  { image: service1, title: "Harvest Concepts", subtitle: "Fertilizer" },
  { image: service2, title: "Farming Products", subtitle: "Fruits" },
  { image: service3, title: "Soil Fertilization", subtitle: "Fertilizer" },
  { image: service4, title: "Pest Control", subtitle: "Pesticides" },
  { image: service5, title: "Irrigation Systems", subtitle: "Watering" },
];

const OurService = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <main className="bg-[#176537]">
      <div className="container mx-auto px-3 lg:px-0 py-5 md:py-16">
        <header className=" ">
          <div className="flex flex-col gap-3">
            <div>
              <button className="flex items-center bg-[#fff] px-3 py-2 rounded-2xl w-40 gap-2 mt-10 md:mt-5 shadow-xl">
                <Image
                  src={icons}
                  width={20}
                  height={20}
                  alt="who we are icons"
                  className="rounded-2xl"
                />
                <p className="text-base agrimo">Our Service</p>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between mt-5">
              <div>
                <h2 className="text-2xl md:text-6xl text-white font-extrabold agrimo">
                  Best Agriculture Services
                </h2>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5 md:mt-0  ">
                <button
                  onClick={handlePrevClick}
                  className="px-4 py-2 border border-white rounded shadow-xl"
                >
                  <FaAngleLeft className="text-white" />
                </button>
                <button
                  onClick={handleNextClick}
                  className="px-4 py-2 border border-white rounded shadow-xl"
                >
                  <FaAngleRight className="text-white" />
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
                <div className="bg-white p-5 rounded-2xl">
                  <div className="flex items-center justify-center mb-4">
                    <Image
                      src={slide.image}
                      width={600}
                      height={450}
                      alt="Card image"
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-sm agrimo text-[#999999] font-bold uppercase">
                      {slide.subtitle}
                    </p>
                    <h2 className="text-xl md:text-2xl agrimo text-[#404a3e] font-extrabold">
                      {slide.title}
                    </h2>
                  </div>
                  <div className="border-t border-[#ecedec] w-full mt-4"></div>
                  <div className="flex flex-col items-start mt-4">
                    <div className="text-left">
                      <p className="text-sm agrimo">
                        Nullam porta enim vel tellus commodo,
                      </p>
                      <p className="text-sm agrimo">
                        eget laoreet odio ultrices.
                      </p>
                    </div>
                    <div className="bg-[#176537] p-2 rounded-full absolute bottom-[-10px] md:bottom-[-12px] -right-2 md:-right-4 z-20">
                      <button className="rounded-full p-2">
                        <Image
                          src={arrow}
                          width={40}
                          height={40}
                          alt="Arrow icon"
                          className="object-contain"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default OurService;
