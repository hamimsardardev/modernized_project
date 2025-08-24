import React from "react";
import socialmediabanner from "../../assets/images/socialmediabanner.png";
const SocialMediabanner = () => {
  return (
    <div>
      <section className="bg-[#F3FFF7]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-6 pt-[114px]">
            <div>
              <h1 className="font-medium text-[#000000] text-[72px]">Social Media</h1>
              <span className="font-bold text-[72px]  text-[#FFB000]">
               Marketing
              </span>
            </div>
            <div>
              <img src={socialmediabanner} alt="socialmediabanner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediabanner;
