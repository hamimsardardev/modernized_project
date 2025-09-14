import React from "react";
import sucessimage from "../../assets/images/sucessimage.png";
const TeamSuccess = () => {
  return (
    <div>
      <section className="bg-[#F3FFF7] pt-[80px] pb-[80px] md:pt-[100px] md:pb-[80px] lg:pt-[128px] lg:pb-[101px]">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 items-center grid grid-cols-1 gap-4 lg:gap-6 pt-[100px] lg:pt-[114px]">
            <div className="flex md:flex-col lg:flex-col gap-2 items-center lg:items-start">
              <h1 className="font-medium text-[#000000] text-[36px] lg:text-[72px] md:text-[56px]">TEAM </h1>
              <span className="lg:font-bold font-semibold text-[36px] lg:text-[72px] md:text-[56px] text-[#FFB000]">
                SUCCESS
              </span>
            </div>
            <div>
              <img src={sucessimage} alt="sucessimage" className="w-auto" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSuccess;
