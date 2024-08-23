"use client";
import React, { useState, useEffect } from "react";

// react icons
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// components
import Menubar from "../Menubar/Menubar";
import Hero from "../Hero/Hero";
import HeroBottom from "../HeroBottom/HeroBottom";
import SellFood from "../SellFood/SellFood";
import Feature from "../Feature/Feature";
import OurService from "../OurService/OurService";
import Naturally from "@/components/home1/Naturally/Naturally";
import Testimonial from "../Testimonial/Testimonial";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import OurHistory from "../OurHistory/OurHistory";
import LatestBlog from "../LatestBlog/LatestBlog";
import Footer from "../Footer/Footer";

const Home1 = () => {
  // scroll top btn handler start
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    setShowScrollTopButton(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll top btn handler end

  return (
    <main>
      <div>
        <div>
          <Menubar />
          <Hero />
          <HeroBottom />
          <SellFood />
          <Feature />
          <OurService />
          <Naturally />
          <Testimonial />
          <WhatWeDo />
          <OurHistory />
          <LatestBlog />
          <Footer />
        </div>

        <div>
          {/* scroll top btn */}
          <div className="fixed bottom-4 right-4 z-40">
            {showScrollTopButton ? (
              <button
                onClick={scrollToTop}
                className="bg-white p-3 rounded-full shadow-xl"
              >
                <FaArrowUp className="text-[#186539]" />
              </button>
            ) : (
              <button
                onClick={scrollToBottom}
                className="bg-white p-3 rounded-full shadow-xl"
              >
                <FaArrowDown className="text-[#186539]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home1;
