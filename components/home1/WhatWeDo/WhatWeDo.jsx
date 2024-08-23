import Image from "next/image";
import React from "react";

// image
import section from "@/public/home1-asset/Section.png";
import bg from "@/public/home1-asset/yello-bg.png";
import icon from "@/public/home1-asset/Icon.png";
import ring from "@/public/home1-asset/ring.png";
import ring2 from "@/public/home1-asset/ring2.png";

const WhatWeDo = () => {
  return (
    <main className="bg-[#f8f7f0]">
      <div className="container mx-auto px-3 lg:px-0 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Image container */}
          <div className="relative w-full max-w-[800px] h-[200px] md:h-[600px]">
            <Image
              src={section}
              layout="fill"
              alt="section left"
              className="rounded-2xl"
            />
          </div>
          {/* Background container */}
          <div className="relative w-full max-w-[800px] h-[530px] md:h-[600px]">
            <div
              className="relative w-full h-full bg-cover bg-center rounded-2xl"
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="px-8 md:px-12 py-5 md:py-10">
                <div className="mt-5 md:mt-16">
                  <button className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-xl">
                    <Image
                      src={icon}
                      width={20}
                      height={20}
                      alt="section icon"
                    />
                    <p className="text-sm agrimo">What We Do</p>
                  </button>
                </div>
                <div>
                  <h2 className="text-[#404a3e] agrimo font-extrabold text-2xl md:text-5xl mt-8">
                    Healthy life with fresh
                  </h2>
                  <h2 className="text-[#404a3e] agrimo font-extrabold text-2xl md:text-5xl">
                    products
                  </h2>
                  <p className="text-sm md:text-base agrimo text-[#666666] mt-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-5  md:mt-10">
                  <div className="flex items-center">
                    <div className="relative w-[120px] h-[120px]">
                      <Image
                        src={ring}
                        layout="fill"
                        objectFit="cover"
                        alt="ring"
                      />
                      <button className="bg-white p-5 rounded-full agrimo font-bold text-base absolute bottom-7 left-6">
                        90%
                      </button>
                    </div>
                    <div>
                      <h2 className="text-[#404a3e] font-bold text-xl md:text-2xl agrimo">
                        Eco Farms
                      </h2>
                      <h2 className="text-[#404a3e] font-bold text-xl md:text-2xl agrimo">
                        Worldwide
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center -mt-6 md:-mt-0">
                    <div className="relative w-[120px] h-[120px]">
                      <Image
                        src={ring2}
                        layout="fill"
                        objectFit="cover"
                        alt="ring"
                      />
                      <button className="bg-white p-5 rounded-full agrimo font-bold text-base absolute bottom-7 left-6">
                        78%
                      </button>
                    </div>
                    <div>
                      <h2 className="text-[#404a3e] font-bold text-xl md:text-2xl agrimo">
                        Eco Farms
                      </h2>
                      <h2 className="text-[#404a3e] font-bold text-xl md:text-2xl agrimo">
                        Worldwide
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;
