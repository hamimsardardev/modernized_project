import React from "react";
import HeaderLogo from "../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section>
        <footer className="mt-[102px] sm:mt-[80px] md:mt-[80px] ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start">
                <img src={HeaderLogo} alt="HeaderLogo" className="sm:mx-0 w-[150px] sm:w-[150px]"/>
                <p className="font-medium text-[#000000] text-center sm:text-left text-sm sm:text-base lg:text-[16px] leading-[172.5%] mb-[40px] sm:mb-[50px] lg:mb-[60px] mt-[20px] sm:mt-[28px] w-full lg:w-[319px] ">
                  
                  Modernized Mobile is one of the leading web design and digital
                  marketing companies serving clients nationwide.
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-center">
                <h4 className="font-semibold text-[#000000] text-[18px] leading-[200%] ml-[-90px] mb-[20px]">
                  Quick Links
                </h4>
                <ul>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] hover:text-[#FFB000]">
                    <a href="#">Services</a>
                  </li>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] mt-[10px] hover:text-[#FFB000]">
                    <a href="#"> Contact Us</a>
                  </li>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] mt-[10px] hover:text-[#FFB000]">
                    <a href="#"> Team Success</a>
                  </li>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] mt-[10px] hover:text-[#FFB000]">
                    <a href="#"> Web Development</a>
                  </li>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] mt-[10px] hover:text-[#FFB000]">
                    <a href="#"> Social Media</a>
                  </li>
                  <li className="font-medium text-[#27265B] text-[16px] leading-[200%] mt-[10px] hover:text-[#FFB000]">
                    <a href="#"> Government Contracting</a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="font-semibold text-[#000000] text-[18px] leading-[200%] mb-[20px] ml-[-80px]">
                  Follow Us
                </h5>
                <ul className="flex gap-[8px]">
                  <li>
                    <a href="#">
                      <FaFacebook className="text-[#0A0938] h-[28px] w-[28px]" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <MdOutlineMailOutline className="text-[#0A0938] h-[28px] w-[28px]" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin className="text-[#0A0938] h-[28px] w-[28px]" />
                    </a>
                  </li>
                  <li className="h-[28px] w-[28px] bg-[#0A0938] rounded-full flex items-center justify-center">
                    <a href="#">
                      <FaPhoneAlt className="text-[#ffff]" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <MdEmail className="text-[#0A0938] h-[28px] w-[28px]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div className="text-center bg-[#FFB000] py-[30px] mt-[80px]">
              <p className="lg:font-medium w-full mx-auto text-[#000000] text-[16px] lg:text-[18px] md:text-[16px] leading-[200%]  ">
                © 2022, Modernized Mobile. All Rights Reserved.
              </p>
            </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
