import React from "react";

const ContractBanner = () => {
  return (
    <div>
      <section className='bg-[url("/public/image/contactbannerimage.png")] bg-cover bg-center '>
        <div className="container">
          <div>
            <div className="py-[266px] ">
              <h1 className="font-medium text-[#FFFFFF] text-[72px]">
              {" "}
                <span className="font-Medium text-[72px]  text-[#FFB000]">
                  
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3 md:mt-[10px] mb-12 sm:mb-16 md:mb-[112px] bg-[#F3FFF7]">
              <div className="container">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-6 lg:pt-[114px] grid grid-cols-1 items-center gap-4 pt-[80px]">
                  <div className="flex lg:flex-col gap-2 items-center lg:items-start">
                    <h1 className="font-medium text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight">
                       Contract
                    </h1>
                    <span className="font-bold text-[#FFB000] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight">
                     Us
                    </span>
                  </div>
                  <div>
                    <img src={appsbannerimage} alt="appsbannerimage" />
                  </div>
                </div>
              </div>
            </section>
    </div>
  );
};

export default ContractBanner;
