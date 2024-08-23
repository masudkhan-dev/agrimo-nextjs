import Image from "next/image";
import React from "react";

// react icons
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

//  next image
import logo from "@/public/home1-asset/logo2.png";
import bg from "@/public/home1-asset/Footer.png";

// social media icons
const socialIcons = [
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaTwitter />, label: "Twitter" },
];

//  useful links item
const usefulLinks = ["Company", "About", "Contact"];

//  working hour item
const workingHours = [
  "Mon - Fri: 9:00am - 5:00pm",
  "Saturday: 10:00am - 6:00pm",
  "Sunday Closed",
];

const Footer = () => (
  <footer
    className="bg-cover bg-no-repeat bg-center py-12 md:py-16"
    style={{ backgroundImage: `url(${bg.src})` }}
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start md:w-96">
          <Image src={logo} alt="Logo" width={150} height={50} />
          <p className="text-[#666] mt-4 text-base agrimo text-center md:text-left">
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialIcons.map(({ icon, label }) => (
              <button
                key={label}
                className="text-[#5c8b54] bg-[#f8f7f0] p-3 rounded-full text-base md:text-xl"
                aria-label={label}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <section className="text-left">
          <div className="text-2xl md:text-4xl font-bold agrimo text-[#404a3e]">
            <h2>Professional & modern, a theme designed to help</h2>
            <h2>your business stand out from the rest.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-5 items-start">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg text-[#404a3e] font-bold mb-1 agrimo">
                Useful Links
              </h3>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link} className="text-[#666] agrimo">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg text-[#404a3e] font-bold mb-1 agrimo">
                Working Time
              </h3>
              <ul className="space-y-2 text-[#666] agrimo">
                {workingHours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg text-[#404a3e] font-bold mb-1 agrimo">
                Our Address
              </h3>
              <p className="text-[#666] agrimo">
                Old Westbury 256, New York <br />
                11201, United States
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#d9dbd8] pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center mt-5">
              <div className="flex items-center text-[#666666] text-sm agrimo">
                <p>Terms & Conditions</p>
                <div className="border-r border-[#d9dbd8] h-5 mx-2"></div>
                <p>Privacy Policy</p>
              </div>
              <p className="text-[#666666] text-sm agrimo">
                Copyright &copy; 2024 Agrimo, All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </footer>
);

export default Footer;
