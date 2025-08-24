import React from "react";
import momoiamge from "../assets/images/momoimage.png";

const ChimeApp = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex">
            <div className="w-[30%] bg-[#FFB000] grid place-items-center">
              <h2 className="text-[#FFFFFF] font-semibold text-[45px] leading-[168%] px-[48px] py-[74px]">
                MoMo Spotlight: Chime App
              </h2>
            </div>
            <div className="w-[70%] bg-[#002544] relative">
              <div className="flex">
                <p className="w-[603px] text-[#FFFFFF] font-medium text-[18px] leading-[180%] py-[139px] pl-[51px]">
                  Clearwater Dolphin Trail App has been making waves in the city
                  of Clearwater, Florida. This app has been helping tourists and
                  locals find the dolphin statues that mark historical landmarks
                  in Clearwater.
                </p>
                <img className="absolute top-[-135px] right-[-160px]" src={momoiamge} alt="momoiamge" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChimeApp;
