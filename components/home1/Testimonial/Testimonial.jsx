"use client";

// swiper js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

// react icons
import { FaAngleLeft, FaAngleRight, FaStar, FaRegStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

// images
import icons from "@/public/home1-asset/Icon.png";
import T1 from "@/public/home1-asset/T1.png";
import T2 from "@/public/home1-asset/T2.png";
import T3 from "@/public/home1-asset/T3.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import rice from "@/public/home1-asset/Rice-logo.png";
import farm from "@/public/home1-asset/farm-logo.png";
import fresh from "@/public/home1-asset/fresh-logo.png";
import food from "@/public/home1-asset/food-logo.png";
import eco from "@/public/home1-asset/eco-product-logo.png";
import tracktor from "@/public/home1-asset/tracktor-logo.png";

const slides = [
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Martin Bailey",
    role: "Supervisor",
    image: T1,
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Emma Greed",
    role: "Customer",
    image: T2,
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Martin Bailey",
    role: "Supervisor",
    image: T1,
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Daniel Craig",
    role: "Co Founder",
    image: T3,
  },
  {
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    name: "Emma Greed",
    role: "Customer",
    image: T2,
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => swiperRef.current.swiper.slidePrev();
  const handleNextClick = () => swiperRef.current.swiper.slideNext();

  return (
    <main className="bg-[#f8f7f0] py-10">
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
            <p className="text-base font-bold agrimo">Testimonial</p>
          </button>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl md:text-5xl text-[#404a3e] font-extrabold agrimo">
              What our customers say
            </h2>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                onClick={handlePrevClick}
                className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] hover:text-white transition"
              >
                <FaAngleLeft />
              </button>
              <button
                onClick={handleNextClick}
                className="px-4 py-2 border border-[#404a3e] rounded hover:bg-[#404a3e] hover:text-white transition"
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
              <section className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center gap-2">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-[#ffce33] text-lg" />
                    ))}
                    <FaRegStar className="text-[#ffce33] text-lg" />
                  </div>
                  <div className="-right-2 absolute bg-[#f8f7f0] p-3 rounded-full">
                    <button className="bg-[#ffce33] rounded-full p-2 ml-2">
                      <ImQuotesLeft className="text-[#404a3e] text-5xl" />
                    </button>
                  </div>
                </div>
                <p className="text-base text-[#999999] leading-6 pt-5">
                  "{slide.text}"
                </p>
                <div className="border-t border-[#ecedec] my-4"></div>
                <div className="flex items-center mt-4">
                  <Image
                    src={slide.image.src}
                    width={50}
                    height={50}
                    alt="Testimonial img"
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <h3 className="font-bold text-lg text-[#404a3e]">
                      {slide.name}
                    </h3>
                    <p className="uppercase text-[#999999] text-xs">
                      {slide.role}
                    </p>
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

export default Testimonial;
