import React from "react";
import { LuClock } from "react-icons/lu";
import { MdOutlineHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#FFB000] pt-[41px] pb-[61px] sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 sm:gap-8 lg:gap-0">
            <div className="flex flex-col items-center text-center border-b-2 lg:border-b-0 lg:border-r-[2px] border-[#FFFFFF] px-4 sm:px-6 lg:pl-[58px] lg:pr-[58px] py-4">
              <LuClock className="text-[#FFFFFF] h-[36px] w-[36px] sm:h-[41px] sm:w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[16px] sm:text-[17px] lg:text-[18px] leading-[155%] text-nowrap"
              >
                Mon - Fri: 8:00 AM - 5:00 PM
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-b-2 lg:border-b-0 lg:border-r-[2px] border-[#FFFFFF] px-4 sm:px-6 lg:pl-[58px] lg:pr-[58px] py-4">
              <MdOutlineHome className="text-[#FFFFFF] h-[36px] w-[36px] sm:h-[41px] sm:w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[16px] sm:text-[17px] lg:text-[18px] leading-[155%]"
              >
                747 SW 2nd Ave. Gainesville, Florida 32601
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-b-2 lg:border-b-0 lg:border-r-[2px] border-[#FFFFFF] px-4 sm:px-6 lg:pl-[58px] lg:pr-[58px] py-4">
              <MdCall className="text-[#FFFFFF] h-[36px] w-[36px] sm:h-[41px] sm:w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[16px] sm:text-[17px] lg:text-[18px] leading-[155%]"
              >
                (352) 340-3700
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-b-2 lg:border-b-0 lg:border-r-[2px] border-[#FFFFFF] px-4 sm:px-6 lg:pl-[58px] lg:pr-[58px] py-4">
              <MdOutlineMailOutline className="text-[#FFFFFF] h-[36px] w-[36px] sm:h-[41px] sm:w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[16px] sm:text-[17px] lg:text-[18px] leading-[155%]"
              >
                sales@modernizedmobile.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;