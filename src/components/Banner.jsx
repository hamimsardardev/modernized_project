import React from "react";
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate(); 
  return (
    <>
      <section className='bg-[url("/public/image/bannerimage.png")] bg-cover bg-center'>
        <div className='bg-[url("/public/image/overlay.png")] pt-[309px] pb-[321px]'>
          <div className="container">
            <div>
              <p className="text-[#FFFFFF] font-medium text-[30px] leading-[137%]">
                Advanced, Agile & Adaptive
              </p>
              <h1 className="text-[#FFFFFF] font-bold text-[56px] leading-[137%] pt-[30px] pb-[30px]">
                APP DEVELOPMENT
              </h1>
              <p className="text-[#FFFFFF] font-medium text-[30px] leading-[137%]">
                Digital Marketing & Web Design Simplified
              </p>
              <button  onClick={() => navigate("/AppDevelop")}
               className="bg-[#FFB000] border-2 border-transparent text-white py-[13px] px-[40px] mt-[38px] rounded-[6px] text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all ">
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
