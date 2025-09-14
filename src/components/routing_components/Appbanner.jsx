import React from "react";
import appsbannerimage from "../../assets/images/appsbannerimage.png";

const Appbanner = () => {
  return (
    <>
      <section className="md:mt-[10px] mb-12 sm:mb-16 md:mb-[112px] bg-[#F3FFF7]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-6 lg:pt-[114px] grid grid-cols-1 items-center gap-4 pt-[80px]">
            <div className="flex lg:flex-col gap-2 items-center lg:items-start">
              <h1 className="font-medium text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight">
                Apps
              </h1>
              <span className="font-bold text-[#FFB000] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight">
                Development
              </span>
            </div>
            <div>
              <img src={appsbannerimage} alt="appsbannerimage" className="sm:w-full"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appbanner;
