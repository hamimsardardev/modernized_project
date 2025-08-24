import React from "react";

const ContractBanner = () => {
  return (
    <div>
      <section className='bg-[url("/public/image/contactbannerimage.png")] bg-cover bg-center '>
        <div className="container">
          <div>
            <div className="py-[266px] ">
              <h1 className="font-medium text-[#FFFFFF] text-[72px]">
                Contract{" "}
                <span className="font-Medium text-[72px]  text-[#FFB000]">
                  Us
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContractBanner;
