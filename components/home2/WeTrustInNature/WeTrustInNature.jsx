import Image from "next/image";
import React from "react";

// react icons
import { TfiArrowTopRight } from "react-icons/tfi";

// image
import icons from "@/public/home1-asset/Icon.png";
import C2 from "@/public/home2-asset/card1.png";
import C1 from "@/public/home2-asset/card2.png";
import C3 from "@/public/home2-asset/card3.png";
import C4 from "@/public/home2-asset/card4.png";
import C5 from "@/public/home2-asset/card5.png";
import C6 from "@/public/home2-asset/card6.png";
import bg1 from "@/public/home1-asset/OH-bg.png";
import bg2 from "@/public/home1-asset/OH-bg-2.png";
import card from "@/public/home1-asset/card2.png";

const WeTrustInNature = () => {
  return (
    <main className="bg-[#f8f7f0]">
      <div className="container mx-auto px-3 lg:px-0">
        <div>
          <div>
            {/* header */}
            <header className="flex flex-col justify-center items-center gap-3 pt-10 ">
              <button className="flex items-center bg-[#fff] px-5 py-2 rounded-2xl  gap-2 shadow-xl">
                <Image
                  src={icons}
                  width={20}
                  height={20}
                  alt="who we are icons"
                  className="rounded-2xl"
                />
                <p className="text-base agrimo text-[#404a3f]">
                  We Trust In Nature
                </p>
              </button>
              <h2 className="text-center text-3xl md:text-4xl text-[#404a3e] font-extrabold agrimo pt-5">
                Anyone Can Make Eco-Friendly Products From Scratch
              </h2>
            </header>

            {/* body */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center py-8 md:py-10 md:mx-[4%]">
              {/* card 1 */}
              <div className="bg-white shadow-xl hover:shadow-none border border-[#e6e6de] transition-all duration-700 w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Agriculture Products
                  </h2>
                  <Image
                    src={C1}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>

              {/*    Professional Farmers */}
              <div className="bg-white shadow-xl w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Professional Farmers
                  </h2>
                  <Image
                    src={C2}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>

              {/*  Fresh Vegetables */}
              <div className="bg-white shadow-xl w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Fresh Vegetables
                  </h2>
                  <Image
                    src={C3}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>

              {/* dairy product */}
              <div className="bg-white shadow-xl w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Dairy Products
                  </h2>
                  <Image
                    src={C4}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>

              {/*   Quality Products */}
              <div className="bg-white shadow-xl w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Quality Products
                  </h2>
                  <Image
                    src={C5}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>

              {/* Modern Equipment */}
              <div className="bg-white shadow-xl w-[98%] md:w-96 rounded-xl p-5 md:p-10">
                <div className="flex items-center justify-between">
                  <h2 className="text-[#404a3e] font-bold text-lg md:text-xl">
                    Modern Equipment
                  </h2>
                  <Image
                    src={C6}
                    width={80}
                    height={80}
                    alt="We Trust In Nature Card 1"
                  />
                </div>
                <div className="border-t border-[#e6e6de] w-full my-5"></div>
                <div>
                  <p className="text-sm text-[#666666] leading-7">
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration
                  </p>
                </div>
              </div>
            </section>

            {/* footer section */}
            <section className="flex flex-col justify-center items-center mt-10 md:mt-16 relative">
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
        </div>
      </div>
    </main>
  );
};

export default WeTrustInNature;
