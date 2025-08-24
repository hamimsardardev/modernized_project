import React from "react";
import appsbannerimage from "../../assets/images/appsbannerimage.png";

const Appbanner = () => {
  return (
    <>
      <section className="mt-[10px] mb-[112px] bg-[#F3FFF7]">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-6 pt-[114px]">
            <div>
              <h1 className="font-medium text-[#000000] text-[72px]">Apps </h1>
              <span className="font-bold text-[72px]  text-[#FFB000]">
                Development
              </span>
            </div>
            <div>
              <img src={appsbannerimage} alt="appsbannerimage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appbanner;
