import React from "react";
import { LuClock } from "react-icons/lu";
import { MdOutlineHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <section className="bg-[#FFB000] pt-[41px] pb-[61px]">
        <div className="container">
          <div className="grid grid-cols-4 items-center">
            <div className="flex flex-col items-center text-center border-r-[2px] border-[#FFFFFF] pl-[58px] pr-[58px]">
              <LuClock className=" text-[#FFFFFF] h-[41px] w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[18px] leading-[115
                    5%] text-nowrap "
              >
                Mon - Fri: 8:00 AM - 5:00 PM
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-r-[2px] border-[#FFFFFF] pl-[58px] pr-[58px]">
              <MdOutlineHome className=" text-[#FFFFFF] h-[41px] w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[18px] leading-[115
                    5%] "
              >
                747 SW 2nd Ave. Gainesville, Florida 32601
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-r-[2px] border-[#FFFFFF] pl-[58px] pr-[58px]">
              <MdCall className=" text-[#FFFFFF] h-[41px] w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[18px] leading-[115
                    5%] "
              >
                (352) 340-3700
              </p>
            </div>
            <div className="flex flex-col items-center text-center border-r-[2px] border-[#FFFFFF] pl-[58px] pr-[58px]">
              <MdOutlineMailOutline className=" text-[#FFFFFF] h-[41px] w-[41px] mb-[20px]" />
              <p
                className="font-medium text-[#FFFFFF] text-[18px] leading-[115
                    5%] "
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
