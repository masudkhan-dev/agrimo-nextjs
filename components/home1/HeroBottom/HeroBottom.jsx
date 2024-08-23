import Image from "next/image";
import React from "react";

// Images
import card1 from "@/public/home1-asset/card1.png";
import card2 from "@/public/home1-asset/card2.png";
import card3 from "@/public/home1-asset/card3.png";
import card4 from "@/public/home1-asset/card4.png";
import arrow from "@/public/home1-asset/arrow.png";

const HeroBottom = () => {
  return (
    <main className="bg-[#f8f7f0] py-10">
      <div className="container mx-auto px-3 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-center">
          <div className="relative flex flex-col justify-center items-start gap-5 w-full max-w-md bg-white rounded-2xl px-7 py-10 ">
            <div className="flex items-center gap-3">
              <Image
                src={card1}
                width={60}
                height={45}
                alt="Card image"
                className="object-cover"
              />
              <h2 className="text-lg font-bold text-[#404a3e] agrimo">
                Professional Farmers
              </h2>
            </div>
            <div className="border-t border-[#ecedec] w-full"></div>
            <div className="flex flex-col items-start">
              <div className="text-left">
                <p className="text-sm mb-2 agrimo">
                  Nullam porta enim vel tellus commodo,
                </p>
                <p className="text-sm agrimo">eget laoreet odio ultrices.</p>
              </div>
              <div className="bg-[#f8f7f0] p-3 rounded-full absolute bottom-[-20px] md:bottom-[-16px] right-0 md:-right-2 z-20 ">
                <button className="bg-white rounded-full  ">
                  <Image
                    src={arrow}
                    width={50}
                    height={50}
                    alt="Arrow icon"
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-start gap-5 w-full max-w-md bg-white rounded-2xl px-7 py-10">
            <div className="flex items-center gap-3">
              <Image
                src={card2}
                width={60}
                height={45}
                alt="Card image"
                className="object-cover"
              />
              <h2 className="text-lg font-bold text-[#404a3e] agrimo">
                Fresh Vegetables
              </h2>
            </div>
            <div className="border-t border-[#ecedec] w-full"></div>
            <div className="flex flex-col items-start">
              <div className="text-left">
                <p className="text-sm agrimo mb-2">
                  Nullam porta enim vel tellus commodo,
                </p>
                <p className="text-sm agrimo">eget laoreet odio ultrices.</p>
              </div>
              <div className="bg-[#f8f7f0] p-3 rounded-full absolute bottom-[-20px] md:bottom-[-16px] right-0 md:-right-2 z-20 ">
                <button className="bg-white rounded-full  ">
                  <Image
                    src={arrow}
                    width={50}
                    height={50}
                    alt="Arrow icon"
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-start gap-5 w-full max-w-md bg-white rounded-2xl px-7 py-10">
            <div className="flex items-center gap-3">
              <Image
                src={card3}
                width={60}
                height={45}
                alt="Card image"
                className="object-cover"
              />
              <h2 className="text-lg agrimo font-bold text-[#404a3e]">
                Agriculture Products
              </h2>
            </div>
            <div className="border-t border-[#ecedec] w-full"></div>
            <div className="flex flex-col items-start">
              <div className="text-left">
                <p className="text-sm agrimo mb-2">
                  Nullam porta enim vel tellus commodo,
                </p>
                <p className="text-sm agrimo">eget laoreet odio ultrices.</p>
              </div>
              <div className="bg-[#f8f7f0] p-3 rounded-full absolute bottom-[-20px] md:bottom-[-16px] right-0 md:-right-2 z-20 ">
                <button className="bg-white rounded-full  ">
                  <Image
                    src={arrow}
                    width={50}
                    height={50}
                    alt="Arrow icon"
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-start gap-5 w-full max-w-md bg-white rounded-2xl px-7 py-10">
            <div className="flex items-center gap-3">
              <Image
                src={card4}
                width={60}
                height={45}
                alt="Card image"
                className="object-cover"
              />
              <h2 className="text-lg agrimo font-bold text-[#404a3e]">
                100% Guaranteed
              </h2>
            </div>
            <div className="border-t border-[#ecedec] w-full"></div>
            <div className="flex flex-col items-start">
              <div className="text-left">
                <p className="text-sm agrimo mb-2">
                  Nullam porta enim vel tellus commodo,
                </p>
                <p className="text-sm agrimo">eget laoreet odio ultrices.</p>
              </div>
              <div className="bg-[#f8f7f0] p-3 rounded-full absolute bottom-[-20px] md:bottom-[-16px] right-0 md:right-0 z-20">
                <button className="bg-white rounded-full p-2">
                  <Image
                    src={arrow}
                    width={50}
                    height={50}
                    alt="Arrow icon"
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBottom;
