import React from "react";
import Image from "next/image";

// image
import banner from "@/public/home1-asset/whoweare.png";

import icons from "@/public/home1-asset/Icon.png";
import icon1 from "@/public/home1-asset/Icon1.png";
import icon2 from "@/public/home1-asset/Icon2.png";

const SellFood = () => {
  return (
    <main className="bg-[#f8f7f0] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-3 md:px-0">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="relative ">
            <figure className="relative">
              <Image
                src={banner}
                width={500}
                height={500}
                alt="who we are banner"
                className="rounded-2xl shadow-lg"
              />
            </figure>
          </div>
          <div className="flex flex-col gap-5">
            <button className="flex items-center bg-[#fff] px-3 py-2 rounded-2xl w-40 gap-2 mt-10 md:mt-5 shadow-xl">
              <Image
                src={icons}
                width={20}
                height={20}
                alt="who we are icons"
                className="rounded-2xl "
              />
              <p className="text-base agrimo">Who We Are</p>
            </button>
            <div>
              <h2 className="text-2xl md:text-4xl agrimo font-extrabold text-[#404a3e]">
                Currently we are growing
              </h2>
              <h2 className="text-2xl md:text-4xl agrimo font-extrabold text-[#404a3e]">
                and selling organic food
              </h2>
            </div>
            <div>
              <p className="text-sm text-[#666666] agrimo">
                There are many variations of passages of Lorem Ipsum available,
                but the majority
              </p>
              <p className="text-sm text-[#666666] agrimo">
                have suffered alteration in some form, by injected humour, or
                randomised words
              </p>
              <p className="text-sm text-[#666666]">which don't look even.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
              <div className="flex flex-col justify-center items-center md:items-start">
                <Image
                  src={icon1}
                  width={80}
                  height={80}
                  alt="who we are icons"
                  className="rounded-2xl "
                />
                <h2 className="font-bold agrimo text-xl text-[#404a3e] my-2">
                  Eco Farms Worldwide
                </h2>
                <p className="text-sm text-[#404a3e] agrimo">
                  There are many variations of pass
                </p>
                <p className="text-sm text-[#404a3e] agrimo">
                  ages of lorem ipsum available
                </p>
                <p className="text-sm text-[#404a3e] agrimo">
                  majority have suffered.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <Image
                  src={icon2}
                  width={80}
                  height={80}
                  alt="who we are icons"
                  className="rounded-2xl "
                />
                <h2 className="font-extrabold agrimo text-xl text-[#404a3e] my-2">
                  Special Equipment
                </h2>
                <p className="text-sm text-[#404a3e] agrimo">
                  There are many variations of pass
                </p>
                <p className="text-sm text-[#404a3e] agrimo">
                  ages of lorem ipsum available
                </p>
                <p className="text-sm text-[#404a3e] agrimo">
                  majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellFood;
