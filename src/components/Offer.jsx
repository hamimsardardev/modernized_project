import React from "react";
import { FaTabletAlt } from "react-icons/fa";
import offerimage1 from "../assets/images/offerimage1.png";
import offerimage2 from "../assets/images/offerimage2.png";
import offerimage3 from "../assets/images/offerimage3.png";


const Offer = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center">
            <h1 className="font-semibold relative text-[48px] text-[#012645] leading-[168%] mb-[76px] after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after: after:bg-[#FFB000] after:w-0 hover:after:w-[58px] after:h-[5px] after:transform after:translate-x-[-50%] after:translate-y-[-50%]">
              What We Offer
            </h1>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <div className="group bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[24px] pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center w-24 h-24">
                  <img src={offerimage1} alt="offerimage1" />
                </div>
                <h2 className="font-bold text-[20px] text-[#000000] leading-[180%] mt-[12px] pb-3 hover:text-[#012645]">
                  App Development
                </h2>
                <p className="w-[368px] font-medium text-[18px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  We develop complex, high-quality iOS, Android, and Windows
                  apps - and we can work in almost any niche. When designing
                  apps, we aim for memorability and stability, crafting a
                  foundation for you to build your empire around. With MoMo you
                  can expect modern UX and UI for your consumers across all
                  commercial platforms and browsers.
                </p>
                <a
                  className="font-semibold text-[18px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]"
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
            <div>
              <div className="group bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[38px] pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center w-28 h-28">
                  <img src={offerimage2} alt="offerimage2" />
                </div>
                <h2 className="font-bold text-[20px] text-[#000000] leading-[180%] mt-[12px] pb-3 hover:text-[#012645]">
                  Digital Marketing
                </h2>
                <p className="w-[368px] font-medium text-[18px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Having trouble spreading the word about your product? Let us formulate a strategy to reach your audience through a mixture of SEO, ads, and a solid content strategy. We’ll perform audience and competitive research, making it simple for you to connect with as many of your prospective customers as possible. 
                </p>
                <a
                  className="font-semibold text-[18px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]"
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
            <div>
              <div className="group bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl/20 pt-[38px] pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center w-28 h-28">
                  <img src={offerimage3} alt="offerimage3" />
                </div>
                <h2 className="font-bold text-[20px] text-[#000000] leading-[180%] mt-[12px] pb-3 hover:text-[#012645]">
                  Web Planning & Development
                </h2>
                <p className="w-[368px] font-medium text-[18px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online presence? Let us craft a website that compliments and propagates your business – designing a website that fits your niche and your tone while standing out from your competitors Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, maxime.. 
                </p>
                <a
                  className="font-semibold text-[18px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]"
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
            <div>
              <div className="group bg-[#FFB000] border border-gray-300 rounded-[14px] shadow-xl pt-[38px] pb-[35px] pr-[29px] pl-[25px] hover:bg-[#FFFFFF]">
                <div className="rounded-full border-[3px] border-[#7F5800] flex items-center justify-center w-28 h-28">
                  <img src={offerimage3} alt="offerimage3" />
                </div>
                <h2 className="font-bold text-[20px] text-[#000000] leading-[180%] mt-[12px] pb-3 hover:text-[#012645]">
                  Business Solutions
                </h2>
                <p className="w-[368px] font-medium text-[18px] text-[#FFFFFF] leading-[168%] pb-5 group-hover:text-[#012645]">
                  Looking to establish or improve your business’s online presence? Let us craft a website that compliments and propagates your business – designing a website that fits your niche and your tone while standing out from your competitors Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, maxime.. 
                </p>
                <a
                  className="font-semibold text-[18px] text-[#FFFFFF] leading-[168%] group-hover:text-[#012645]"
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
