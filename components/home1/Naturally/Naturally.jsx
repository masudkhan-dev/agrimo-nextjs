import React from "react";
import Image from "next/image";

// react fast marquee
import Marquee from "react-fast-marquee";

// image
import icons from "@/public/home1-asset/Icon.png";
import GN1 from "@/public/home1-asset/GN1.png";
import GN2 from "@/public/home1-asset/GN2.png";
import GN3 from "@/public/home1-asset/GN3.png";
import GN4 from "@/public/home1-asset/GN4.png";
import Maize from "@/public/home1-asset/Maize.png";
import GNM1 from "@/public/home1-asset/GNM1.png";
import GNM2 from "@/public/home1-asset/GNM2.png";
import GNM3 from "@/public/home1-asset/GNM.png";

const Naturally = () => {
  return (
    <main className="bg-[#f8f7f0]">
      <div className="container mx-auto px-3 lg:px-0 pt-10 md:pt-16">
        <div>
          {/* header */}
          <header className="flex flex-col justify-center items-center gap-3">
            <button className="flex items-center bg-[#fff] px-3 py-2 rounded-2xl w-40 gap-2 mt-10 md:mt-5 shadow-xl">
              <Image
                src={icons}
                width={20}
                height={20}
                alt="who we are icons"
                className="rounded-2xl "
              />
              <p className="text-base agrimo">Grow Naturally</p>
            </button>
            <h2 className="text-3xl md:text-4xl text-[#404a3e] font-extrabold agrimo">
              Choose What's Perfect
            </h2>
            <h2 className="text-3xl md:text-4xl text-[#404a3e] font-extrabold agrimo">
              For Your Field
            </h2>
          </header>

          {/* body */}
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 mt-8 md:mt-5">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <Image
                  src={GN1}
                  width={90}
                  height={90}
                  alt="Grow Naturally 1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#404a3e] agrimo">
                    Agriculture Products
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Nullam porta enim vel tellus commodo,
                  </p>
                  <p className="text-sm text-[#666666]">
                    eget laoreet odio ultrices.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={GN2}
                  width={90}
                  height={90}
                  alt="Grow Naturally 1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#404a3e] agrimo">
                    Quality Products
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Nullam porta enim vel tellus commodo,
                  </p>
                  <p className="text-sm text-[#666666]">
                    eget laoreet odio ultrices.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={Maize}
                width={900}
                height={800}
                alt="This is yellow Maize"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <Image
                  src={GN3}
                  width={90}
                  height={90}
                  alt="Grow Naturally 1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#404a3e] agrimo">
                    Fresh Vegetables
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Nullam porta enim vel tellus commodo,
                  </p>
                  <p className="text-sm text-[#666666]">
                    eget laoreet odio ultrices.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={GN4}
                  width={90}
                  height={90}
                  alt="Grow Naturally 1"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#404a3e] agrimo">
                    Pure & Organic
                  </h3>
                  <p className="text-sm text-[#666666]">
                    Nullam porta enim vel tellus commodo,
                  </p>
                  <p className="text-sm text-[#666666]">
                    eget laoreet odio ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* marquee */}
          <div className=" py-20">
            <Marquee>
              <div className="flex items-center gap-3">
                <Image
                  src={GNM1}
                  width={300}
                  height={300}
                  alt="Grow Naturally Marquee"
                />
                <Image
                  src={GNM2}
                  width={300}
                  height={300}
                  alt="Grow Naturally Marquee"
                />
                <Image
                  src={GNM1}
                  width={300}
                  height={300}
                  alt="Grow Naturally Marquee"
                />
                <Image
                  src={GNM2}
                  width={300}
                  height={300}
                  alt="Grow Naturally Marquee"
                />
                <Image
                  src={GNM3}
                  width={300}
                  height={300}
                  alt="Grow Naturally Marquee"
                  className="rounded-2xl mr-3"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Naturally;
