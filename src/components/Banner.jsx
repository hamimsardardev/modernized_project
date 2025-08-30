import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='bg-[url("/public/image/bannerimage.png")] bg-cover bg-center'>
        <div className='bg-[url("/public/image/overlay.png")] pt-[150px] md:pt-[250px] lg:pt-[309px] pb-[150px] md:pb-[250px] lg:pb-[321px]'>
          <div className="container px-4">
            <div className="text-left md:text-left">
              <p className="text-[#FFFFFF] font-medium text-[20px] md:text-[24px] lg:text-[30px] leading-[137%]">
                Advanced, Agile & Adaptive
              </p>
              <h1 className="text-[#FFFFFF] font-bold text-[36px] md:text-[48px] lg:text-[56px] leading-[137%] pt-[20px] md:pt-[25px] lg:pt-[30px] pb-[20px] md:pb-[25px] lg:pb-[30px]">
                APP DEVELOPMENT
              </h1>
              <p className="text-[#FFFFFF] font-medium text-[20px] md:text-[24px] lg:text-[30px] leading-[137%]">
                Digital Marketing & Web Design Simplified
              </p>
              <button
                onClick={() => navigate("/AppDevelop")}
                className="bg-[#FFB000] border-2 border-transparent text-white py-[10px] md:py-[12px] lg:py-[13px] px-[30px] md:px-[35px] lg:px-[40px] mt-[25px] md:mt-[32px] lg:mt-[38px] rounded-[6px] text-[16px] md:text-[17px] lg:text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all "
              >
                Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
