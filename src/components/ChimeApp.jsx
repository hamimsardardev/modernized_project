import React from "react";
import momoiamge from "../assets/images/momoimage.png";

const ChimeApp = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="lg:flex">
            <div className="lg:w-[30%] w-full bg-[#FFB000] grid place-items-center">
              <h2 className="text-[#FFFFFF] font-semibold lg:text-[45px] text-[40px] leading-[168%] lg:px-[48px] lg:py-[74px] px-[20px] py-[50px]">
                MoMo Spotlight: Chime App
              </h2>
            </div>
            <div className="lg:w-[70%] w-full bg-[#002544] lg:relative">
              <div className=" lg:flex">
                <p className="lg:w-[603px] w-full text-[#FFFFFF] lg:font-medium fomt-thin lg:text-[18px] text-[16px] leading-[180%] lg:py-[139px] lg:pl-[51px] py-[30px] pl-[30px]">
                  Clearwater Dolphin Trail App has been making waves in the city
                  of Clearwater, Florida. This app has been helping tourists and
                  locals find the dolphin statues that mark historical landmarks
                  in Clearwater.
                </p>
                <img
                  className="sm:block lg:absolute lg:top-[-135px] lg:right-[-160px] top-[-45px] right-[-107px]"
                  src={momoiamge}
                  alt="momoiamge"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChimeApp;
