import React from "react";
import socialmediabanner from "../../assets/images/socialmediabanner.png";
const SocialMediabanner = () => {
  return (
    <div>
      <section className="bg-[#F3FFF7]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 items-center grid grid-cols-1 gap-4 lg:gap-6 pt-[100px] lg:pt-[114px]">
            <div className="flex flex-col md:flex-col lg:flex-col gap-2 items-center lg:items-start">
              <h1 className="font-medium text-[#000000] text-[30px] sm:text-[36px] lg:text-[72px] md:text-[56px]">Social Media</h1>
              <span className="lg:font-bold font-semibold text-[30px] sm:text-[36px] lg:text-[72px] md:text-[56px] text-[#FFB000]">
               Marketing
              </span>
            </div>
            <div>
              <img src={socialmediabanner} alt="socialmediabanner" className="w-auto"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediabanner;
