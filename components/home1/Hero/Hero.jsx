"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// react icons
import { TfiArrowTopRight } from "react-icons/tfi";

// images
import bg from "@/public/home1-asset/hero.png";

// slider items
const slides = [
  {
    imgSrc: bg.src,
    title: "Quality Trust:",
    subtitle: "Direct to the Farm",
    description:
      "We all need a little space to grow. Give yourself the space you need to find your inner you.",
  },
  {
    imgSrc: bg.src,
    title: "Fresh and Organic",
    subtitle: "Straight from Nature",
    description:
      "Experience the freshest and most organic produce direct from the farm.",
  },
  {
    imgSrc: bg.src,
    title: "Sustainable Farming",
    subtitle: "For a Better Future",
    description:
      "Support sustainable farming practices and make a positive impact on the environment.",
  },
  {
    imgSrc: bg.src,
    title: "Farm-to-Table",
    subtitle: "Deliciously Fresh",
    description:
      "Enjoy meals made from the freshest ingredients sourced directly from the farm.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setDragOffset(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setDragOffset(0);
    nextSlide();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    setDragOffset(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }
    setDragOffset(0);
  };

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="absolute w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${
            currentSlide * 100
          }% + ${dragOffset}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{
              left: `${index * 100}%`,
            }}
          >
            <Image
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="container mx-auto px-6 ">
                <div className="flex flex-col justify-center md:justify-start items-center md:items-start ">
                  <div className="inline-block px-8 py-2 rounded-3xl border border-white mb-6">
                    <p className="text-xs leading-[22px] tracking-[1px] text-white agrimo">
                      Believe in Quality!
                    </p>
                  </div>
                  <h2 className="font-extrabold agrimo text-white text-5xl md:text-7xl mb-2">
                    {slide.title}
                  </h2>
                  <h2 className="font-extrabold agrimo text-white text-5xl md:text-7xl mb-6">
                    {slide.subtitle}
                  </h2>
                  <div className="border-t border-[#9aa398] my-6 w-80 md:w-1/2  "></div>
                  <p className="text-sm text-white agrimo mb-6">
                    {slide.description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-3xl agrimo text-sm">
                    Contact Us{" "}
                    <TfiArrowTopRight className="text-black text-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={handleDotClick}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
