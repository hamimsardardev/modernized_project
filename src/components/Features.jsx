import React from "react";
import featuresone from "../assets/images/featuresone.png";
import featurestwo from "../assets/images/featurestwo.png";
import featuresthree from "../assets/images/freaturesthree.png";

const Features = () => {
  return (
    <div>
      <section className="mt-[100px] sm:mt-[150px] lg:mt-[200px] mb-[50px] sm:mb-[75px] lg:mb-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-semibold relative text-[36px] sm:text-[42px] lg:text-[48px] text-[#012645] leading-[168%] mb-[40px] sm:mb-[60px] lg:mb-[76px] after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:bg-[#FFB000] after:w-0 hover:after:w-[58px] after:h-[5px] after:transform after:translate-x-[-50%] after:translate-y-[-50%] after:transition-all after:duration-300">
              features
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[33px] items-center justify-center">
            <div className="drop-shadow-2xl w-full sm:w-[400px] lg:w-1/3">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl transition-shadow duration-300">
                <img
                  className="pt-[48px] pr-[38px] pl-[29px] pb-[50px] w-full h-auto mx-auto"
                  src={featuresone}
                  alt="featuresone"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[180%] pt-[24px]">
                    "Instagram for Surgeons"
                  </h4>
                  <p className="w-full sm:w-[360px] lg:w-[406px] mx-auto text-[#000000] font-medium text-[16px] sm:text-[17px] lg:text-[18px] leading-[168%] pt-[27px] pb-[27px] pr-[24px] pl-[24px]">
                    This feature displays a photo collection of users of the app
                    who take pictures with the dolphins.
                  </p>
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl w-full sm:w-[400px] lg:w-1/3">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl transition-shadow duration-300">
                <img
                  className="pt-[65px] pr-[38px] pl-[29px] pb-[50px] w-full h-auto mx-auto"
                  src={featurestwo}
                  alt="featurestwo"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[180%] pt-[24px]">
                    Product Catalog
                  </h4>
                  <p className="w-full sm:w-[360px] lg:w-[406px] mx-auto text-[#000000] font-medium text-[16px] sm:text-[17px] lg:text-[18px] leading-[168%] pt-[27px] pb-[35px] pr-[24px] pl-[24px]">
                    This feature helps you drop a pin where you park and find
                    your vehicle with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl w-full sm:w-[400px] lg:w-1/3">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl transition-shadow duration-300">
                <img
                  className="pt-[48px] pr-[38px] pl-[29px] pb-[50px] w-full h-auto mx-auto"
                  src={featuresthree}
                  alt="featuresthree"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[20px] sm:text-[22px] lg:text-[24px] leading-[180%] pt-[24px]">
                    User Security
                  </h4>
                  <p className="w-full sm:w-[360px] lg:w-[406px] mx-auto text-[#000000] font-medium text-[16px] sm:text-[17px] lg:text-[18px] leading-[168%] pt-[27px] pb-[27px] pr-[24px] pl-[24px]">
                    The interactive ‘Dolphin Trail’ shows all of the historical
                    dolphin statues displayed all over the City of Clearwater.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;