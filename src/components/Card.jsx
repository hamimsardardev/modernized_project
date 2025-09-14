"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import offerimage1 from "../assets/images/offerimage1.png";
import offerimage2 from "../assets/images/offerimage2.png";
import offerimage3 from "../assets/images/offerimage3.png";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Card() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const [viewdetails1, setViewdetails1] = useState(false);
  const [viewdetails2, setViewdetails2] = useState(false);
  const [viewdetails3, setViewdetails3] = useState(false);
  const [viewdetails4, setViewdetails4] = useState(false);

    const handleReadToggle1 = () => {
    setViewdetails1(!viewdetails1);
  };
  const handleReadToggle2 = () => {
    setViewdetails2(!viewdetails2);
  };
  const handleReadToggle3 = () => {
    setViewdetails3(!viewdetails3);
  };
  const handleReadToggle4 = () => {
    setViewdetails4(!viewdetails4);
  };

  return (
    <section className='bg-[url("/images/reviewbg.png")] bg-cover bg-center bg-no-repeat w-full py-15'>
      <div className="container mx-auto px-5">
        <div className="text-center">
          <h1 className="font-semibold relative text-[48px] text-[#012645] leading-[168%] mb-[76px] after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after: after:bg-[#FFB000] after:w-0 hover:after:w-[58px] after:h-[5px] after:transform after:translate-x-[-50%] after:translate-y-[-50%]">
            What We Offer
          </h1>
        </div>

        <div className="mt-20">
          <Slider ref={sliderRef} {...settings}>
            <div
              className="group ml-3 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[24px]
              pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF]
              sm:ml-0 sm:pt-[16px] sm:pb-[24px] sm:pr-[20px] sm:pl-[16px]
              md:pt-[24px] md:pb-[35px] md:pr-[29px] md:pl-[25px]"
            >
              <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center lg:w-24 lg:h-24 w-15 h-15">
                <img
                  src={offerimage1}
                  alt="offerimage1"
                  className="w-8 h-8 lg:w-15 lg:h-15"
                />
              </div>
              <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                App Development
              </h2>
              <p className="w-auto lg:font-medium font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]">
                We develop complex, high-quality iOS, Android, and Windows apps
                - and we can work in almost any niche. When designing apps, we
                aim for memorability and stability, crafting a foundation for
                you to build your empire around. With MoMo you can expect modern
                UX and UI for your consumers across all commercial platforms and
                browsers.
              </p>
              <button
                onClick={handleReadToggle1}
                className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
              >
                {!viewdetails1 && "View Details"}
              </button>
              {viewdetails1 && (
                <p className="w-auto font-medium lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugit, accusamus? Nihil alias ab distinctio tempora qui sint
                  ea minima quibusdam!
                </p>
              )}
              <button
                onClick={handleReadToggle1}
                className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
              >
                {viewdetails1 && "View Less"}
              </button>
            </div>
            <div>
              <div
                className="group ml-3 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[24px]
              pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF] sm:ml-0 sm:pt-[16px] sm:pb-[24px] sm:pr-[20px] 
              sm:pl-[16px] md:pt-[24px] md:pb-[35px] md:pr-[29px] md:pl-[25px]"
              >
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center lg:w-28 lg:h-28 w-16 h-16">
                  <img
                    src={offerimage2}
                    alt="offerimage2"
                    className="w-10 h-10 lg:w-15 lg:h-15"
                  />
                </div>
                <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                  Digital Marketing
                </h2>
                <p className="w-auto lg:font-medium font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Having trouble spreading the word about your product? Let us
                  formulate a strategy to reach your audience through a mixture
                  of SEO, ads, and a solid content strategy. We’ll perform
                  audience and competitive research, making it simple for you to
                  connect with as many of your prospective customers as
                  possible.
                </p>
                <button
                  onClick={handleReadToggle2}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails2 && "View Details"}
                </button>
                {viewdetails2 && (
                  <p className="w-auto font-medium lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit, accusamus? Nihil alias ab distinctio tempora qui sint
                    ea minima quibusdam!
                  </p>
                )}
                <button
                  onClick={handleReadToggle2}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {viewdetails2 && "View Less"}
                </button>
              </div>
            </div>
            <div>
              <div
                className="group ml-3 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[24px]
              pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF] sm:ml-0 sm:pt-[16px] sm:pb-[24px] sm:pr-[20px] 
              sm:pl-[16px] md:pt-[24px] md:pb-[35px] md:pr-[29px] md:pl-[25px]"
              >
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center lg:w-28 lg:h-28 w-16 h-16">
                  <img
                    src={offerimage3}
                    alt="offerimage3"
                    className="w-10 h-10 lg:w-15 lg:h-15"
                  />
                </div>
                <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                  Web Planning & Development
                </h2>
                <p className="w-auto lg:font-medium font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online
                  presence? Let us craft a website that compliments and
                  propagates your business – designing a website that fits your
                  niche and your tone while standing out from your competitors
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, maxime..
                </p>
                <button
                  onClick={handleReadToggle3}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails3 && "View Details"}
                </button>
                {viewdetails3 && (
                  <p className="w-auto font-medium lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit, accusamus? Nihil alias ab distinctio tempora qui sint
                    ea minima quibusdam!
                  </p>
                )}
                <button
                  onClick={handleReadToggle3}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {viewdetails3 && "View Less"}
                </button>
              </div>
            </div>
            <div>
              <div
                className="group ml-3 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[24px]
              pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF] sm:ml-0 sm:pt-[16px] sm:pb-[24px] sm:pr-[20px] 
              sm:pl-[16px] md:pt-[24px] md:pb-[35px] md:pr-[29px] md:pl-[25px]"
              >
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center lg:w-28 lg:h-28 w-16 h-16">
                  <LuBriefcaseBusiness className="lg:h-[51px] lg:w-[51px] h-10 w-10 lg:w-15 lg:h-15" />
                </div>
                <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                  Business Solutions
                </h2>
                <p className="w-auto lg:font-medium font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online
                  presence? Let us craft a website that compliments and
                  propagates your business – designing a website that fits your
                  niche and your tone while standing out from your competitors
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, maxime..
                </p>
                <button
                  onClick={handleReadToggle4}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails4 && "View Details"}
                </button>
                {viewdetails4 && (
                  <p className="w-auto font-medium lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit, accusamus? Nihil alias ab distinctio tempora qui sint
                    ea minima quibusdam!
                  </p>
                )}
                <button
                  onClick={handleReadToggle4}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {viewdetails4 && "View Less"}
                </button>
              </div>
            </div>
          </Slider>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="flex items-center justify-center w-10 h-10 text-black border rounded-full text-lg"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className=" flex items-center justify-center w-10 h-10 text-black border rounded-full text-lg"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
