import Image from "next/image";
import React from "react";

// image
import icons from "@/public/home1-asset/Icon.png";
import bg from "@/public/home2-asset/DAU-bg.png";
import DAU1 from "@/public/home2-asset/DAU1.png";
import N1 from "@/public/home2-asset/01.png";
import N2 from "@/public/home2-asset/02.png";
import N3 from "@/public/home2-asset/03.png";
import N4 from "@/public/home2-asset/04.png";

const DiscoverAboutUs = () => {
  return (
    <main className="bg-[#f8f7f0]">
      <div className="container mx-auto px-3 lg:px-0">
        <div
          className="rounded"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="p-5 md:p-8">
            <header className="flex flex-col gap-4 mb-10 pt-10">
              <button className="flex items-center bg-white px-4 py-2 rounded-2xl w-fit gap-2 shadow-xl mx-[10%]">
                <Image
                  src={icons}
                  width={20}
                  height={20}
                  alt="who we are icons"
                  className="rounded-2xl"
                />
                <p className="text-base font-bold agrimo text-[#404a3f]">
                  Discover About Us
                </p>
              </button>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-2xl md:text-5xl text-[#fff] font-extrabold agrimo md:w-[50%]">
                  Agriculture matters to the future of development
                </h2>
                <div className="flex items-center gap-4 mt-4 md:mt-0 md:w-[50%]">
                  <p className="text-sm text-[#dee8dd]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                </div>
              </div>
            </header>

            <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              <div>
                <Image
                  src={DAU1}
                  height={700}
                  width={700}
                  alt="Discover About Us Picture 1"
                  className="rounded"
                />
              </div>
              <div className="flex flex-col gap-5">
                <ul className="flex items-center gap-5 bg-[#ffffff] rounded-lg py-2 md:py-4 px-2">
                  <li>
                    <Image
                      src={N1}
                      height={100}
                      width={100}
                      alt="Discover About Us Picture 1"
                    />
                  </li>
                  <li className="text-[#404a3e] font-bold agrimo text-base md:text-xl">
                    Schedule Your Experience
                  </li>
                  <li className="text-sm text-[#666666] agrimo">
                    Quisqu tell us risus adpis viera bibe um urna.
                  </li>
                </ul>
                <ul className="flex items-center gap-5 py-2 md:py-4 px-2">
                  <li>
                    <Image
                      src={N2}
                      height={100}
                      width={100}
                      alt="Discover About Us Picture 1"
                    />
                  </li>
                  <li className="text-[#fff] font-bold agrimo text-base md:text-xl">
                    Get Professional Advice
                  </li>
                  <li className="text-sm text-[#ceddcc] agrimo">
                    Quisqu tell us risus adpis viera bibe um urna.
                  </li>
                </ul>
                <ul className="flex items-center gap-5 py-2 md:py-4 px-2">
                  <li>
                    <Image
                      src={N3}
                      height={100}
                      width={100}
                      alt="Discover About Us Picture 1"
                    />
                  </li>
                  <li className="text-[#fff] font-bold agrimo text-base md:text-xl">
                    Meet Our Expert Farmer
                  </li>
                  <li className="text-sm text-[#ceddcc] agrimo">
                    Quisqu tell us risus adpis viera bibe um urna.
                  </li>
                </ul>
                <ul className="flex items-center gap-5 py-2 md:py-4 px-2">
                  <li>
                    <Image
                      src={N4}
                      height={100}
                      width={100}
                      alt="Discover About Us Picture 1"
                    />
                  </li>
                  <li className="text-[#fff] font-bold agrimo text-base md:text-xl">
                    Now Get a Best Products
                  </li>
                  <li className="text-sm text-[#ceddcc] agrimo">
                    Quisqu tell us risus adpis viera bibe um urna.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiscoverAboutUs;
