import React from "react";
import featuresone from "../assets/images/featuresone.png";
import featurestwo from "../assets/images/featurestwo.png";
import featuresthree from "../assets/images/freaturesthree.png";

const Features = () => {
  return (
    <div>
      <section className="mt-[200px] mb-[100px]">
        <div className="container">
          <div className="text-center">
            <h1 className="font-semibold relative text-[48px] text-[#012645] leading-[168%] mb-[76px] after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after: after:bg-[#FFB000] after:w-0 hover:after:w-[58px] after:h-[5px] after:transform after:translate-x-[-50%] after:translate-y-[-50%]">
              features
            </h1>
          </div>
          <div className="lg:flex gap-[33px] items-center">
            <div className="drop-shadow-2xl">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl ">
                <img
                  className="pt-[48px] pr-[38px] pl-[29px] pb-[50px]"
                  src={featuresone}
                  alt="featuresone"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[24px] leading-[180%] pt-[24px]">
                    "Instagram for Surgeons"
                  </h4>
                  <p className="w-[406px] mx-auto text-[#000000] font-medium text-[18px] leading-[168%] pt-[27px] pb-[27px] pr-[24px] pl-[24px]">
                    This feature displays a photo collection of users of the app
                    who take pictures with the dolphins.
                  </p>
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl ">
                <img
                  className="pt-[65px] pr-[38px] pl-[29px] pb-[50px]"
                  src={featurestwo}
                  alt="featurestwo"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[24px] leading-[180%] pt-[24px]">
                    Product Catalog
                  </h4>
                  <p className="w-[406px]  mx-auto text-[#000000] font-medium text-[18px] leading-[168%] pt-[27px] pb-[35px] pr-[24px] pl-[24px]">
                    This feature helps you drop a pin where you park and find
                    your vehicle with ease.
                  </p>
                </div>
              </div>
            </div>
            <div className="drop-shadow-2xl">
              <div className="text-center border-2 border-[#F0F0F0] rounded-2xl hover:drop-shadow-2xl ">
                <img
                  className="pt-[48px] pr-[38px] pl-[29px] pb-[50px]"
                  src={featuresthree}
                  alt="featuresthree"
                />
                <div className="bg-[#FFF5F5] rounded-2xl">
                  <h4 className="text-[#012645] font-semibold text-[24px] leading-[180%] pt-[24px]">
                    User Security
                  </h4>
                  <p className="w-[406px] mx-auto text-[#000000] font-medium text-[18px] leading-[168%] pt-[27px] pb-[27px] pr-[24px] pl-[24px]">
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
