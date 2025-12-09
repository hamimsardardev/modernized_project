"use client";

import React, { useRef, useState } from "react";
import offerimage1 from "../assets/images/offerimage1.png";
import offerimage2 from "../assets/images/offerimage2.png";
import offerimage3 from "../assets/images/offerimage3.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Card() {
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
          <h1 className="font-semibold relative text-[32px] md:text-3xl lg:text-[48px]  text-[#012645] leading-[168%] mb-6 md:mb-[50px] lg:mb-[76px] after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after: after:bg-[#FFB000] after:w-0 hover:after:w-[58px] after:h-[5px] after:transform after:translate-x-[-50%] after:translate-y-[-50%]">
            What We Offer
          </h1>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div className="group ml-3 pl-2 md:pl-3 lg:pl-5 py-2 md:py-3 lg:py-5 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl w-auto lg:w-[400px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 ">
                  <img
                    src={offerimage1}
                    alt="offerimage1"
                    className="w-8 h-8 lg:w-15 lg:h-15"
                  />
                </div>
                <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                  App Development
                </h2>
                <p className="w-auto lg:w-[368px]  lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] lg:pb-5 group-hover:text-[#012645]">
                  We develop complex, high-quality iOS, Android, and Windows
                  apps - and we can work in almost any niche. When designing
                  apps, we aim for memorability and stability, crafting a
                  foundation for you to build your empire around.
                </p>
                <button
                  onClick={handleReadToggle1}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails1 && "View Details"}
                </button>
                {viewdetails1 && (
                  <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] group-hover:text-[#012645] ">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="group ml-3 pl-2 md:pl-3 lg:pl-5 py-2 md:py-3 lg:py-5 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl w-auto lg:w-[400px] hover:bg-[#FFFFFF]">
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
                <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] lg:pb-5 group-hover:text-[#012645]">
                  Having trouble spreading the word about your product? Let us
                  formulate a strategy to reach your audience through a mixture
                  of SEO, ads, and a solid content strategy. We’ll perform
                  audience and competitive research..
                </p>
                <button
                  onClick={handleReadToggle2}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails2 && "View Details"}
                </button>
                {viewdetails2 && (
                  <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] group-hover:text-[#012645]">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="group ml-3 pl-2 md:pl-3 lg:pl-5 py-2 md:py-3 lg:py-5 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl w-auto lg:w-[400px] hover:bg-[#FFFFFF]">
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
                <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] lg:pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online
                  presence? Let us craft a website that compliments and
                  propagates your business – designing a website that fits your
                  niche and your tone while standing out from your competitors.
                </p>
                <button
                  onClick={handleReadToggle3}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails3 && "View Details"}
                </button>
                {viewdetails3 && (
                  <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] group-hover:text-[#012645]">
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
            </SwiperSlide>
            <SwiperSlide>
              <div className="group ml-3 pl-2 md:pl-3 lg:pl-5 py-2 md:py-3 lg:py-5 bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl w-auto lg:w-[400px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center lg:w-28 lg:h-28 w-16 h-16">
                  <LuBriefcaseBusiness className="md:h-[51px] md:w-[51px] h-10 w-10 lg:w-15 lg:h-15" />
                </div>
                <h2 className="font-bold lg:text-[20px] text-[18px] text-[#000000] leading-[180%] lg:mt-[12px] mt-[8px] pb-3 hover:text-[#012645]">
                  Business Solutions
                </h2>
                <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] lg:pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online
                  presence? Let us craft a website that compliments and
                  propagates your business – designing a website that fits your
                  niche and your tone while standing out from your competitors.
                </p>
                <button
                  onClick={handleReadToggle4}
                  className="lg:font-semibold font-normal lg:text-[18px] text-[16px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645] cursor-pointer hover:text-red-500"
                >
                  {!viewdetails4 && "View Details"}
                </button>
                {viewdetails4 && (
                  <p className="w-auto lg:w-[368px] lg:font-medium font-thin md:font-medium lg:text-[18px] text-[14px] md:text-[16px] text-[#FFFFFF] lg:leading-[168%] group-hover:text-[#012645]">
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
            </SwiperSlide>
          </Swiper>
          <button className="custom-prev absolute left-[-10px] lg:left-[-10px] top-1/2 -translate-y-1/2 z-10 bg-white text-[#FFB000] px-2 py-2 rounded-full shadow-lg">
            <GrFormPrevious className="lg:text-3xl" />
          </button>

          <button className="custom-next absolute right-[-18px] lg:right-[20px] top-1/2 -translate-y-1/2 z-10 bg-white text-[#FFB000] px-2 py-2 rounded-full shadow-lg">
            <MdOutlineNavigateNext className="lg:text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
