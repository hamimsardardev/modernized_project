import React from "react";

const ContractBanner = () => {
  return (
    <>
      <section className='bg-[url("/public/image/contactbannerimage.png")] bg-cover bg-center '>
        <div className="container">
          <div>
            <div className="py-[150px] md:py-[200px] lg:py-[266px]">
              <h1 className="font-medium text-[#c41d69] text-[48px] md:text-[60px] lg:text-[72px]">
                Contract
                <span className="font-Medium text-[#FFB000] pl-4 text-[48px] md:text-[60px] lg:text-[72px]">
                  Us
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContractBanner;
