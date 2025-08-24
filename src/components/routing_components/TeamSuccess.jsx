import React from "react";
import sucessimage from "../../assets/images/sucessimage.png";
const TeamSuccess = () => {
  return (
    <div>
      <section className="pt-[128px] pb-[101px]">
        <div className="container">
          <div className="grid grid-cols-2  items-center">
            <div>
              <h1 className="font-medium text-[#000000] text-[72px]">TEAM </h1>
              <span className="font-bold text-[72px]  text-[#FFB000]">
                SUCCESS
              </span>
            </div>
            <div>
              <img src={sucessimage} alt="sucessimage" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamSuccess;
