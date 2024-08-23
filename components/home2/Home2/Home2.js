"use client";
import React, { useEffect, useState } from "react";

// react icons
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import Menubar from "../Menubar/Menubar";
import Hero2 from "../Hero2/Hero2";
import Caring from "../Caring/Caring";
import OurService2 from "../OurService2/OurService2";
import DiscoverAboutUs from "../DiscoverAboutUs/DiscoverAboutUs";
import WeTrustInNature from "../WeTrustInNature/WeTrustInNature";
import OurFarmer from "../OurFarmer/OurFarmer";
import LatestBlog from "@/components/home1/LatestBlog/LatestBlog";
import Footer from "../Footer/Footer";

const Home2 = () => {
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
        <Menubar />
        <Hero2 />
        <Caring />
        <OurService2 />
        <DiscoverAboutUs />
        <WeTrustInNature />
        <OurFarmer />
        <LatestBlog />
        <Footer />
      </div>

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
    </main>
  );
};

export default Home2;
