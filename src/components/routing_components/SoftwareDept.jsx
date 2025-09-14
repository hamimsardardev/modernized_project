import React, { useState } from "react";
import deptimageone from "../../assets/images/deptimageone.png";
import deptimagetwo from "../../assets/images/deptimagetwo.png";
import deptimagethree from "../../assets/images/deptimagethree.png";
import deptimagefour from "../../assets/images/deptimagefour.png";
import deptimagefive from "../../assets/images/deptimagefive.png";
import deptimagesix from "../../assets/images/deptimagesix.png";


const SoftwareDept = () => {
  let [activenumber, setActive] = useState(1);
  const handleActive = (number) => {
    setActive(number);
  };
  return (
    <>
      <section className="mt-[100px] mb-[180px]">
        <div className="container">
          <div className="text-center pb-[66px]">
            <h2 className="font-medium text-[24px] md:text-[26px] lg:text-[30px] text-[#000000]">
              Customized Software
            </h2>
            <span className="inline-block font-bold text-[30px] md:text-[40px] lg:text-[45px] text-[#1F2146]">
              Development Services
            </span>
            <p className="lg:w-[972px] w-auto relative mx-auto font-regular text-[16px] md:text-[18px] lg:text-[18px] text-[#000000] lg:after:content-[''] lg:after:absolute lg:after:bottom-[-20px] lg:after:left-[420px] lg:after:bg-[#FF8F8B] lg:after:w-[109px] lg:after:h-1 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
              imperdiet in molestie volutpat morbi vitae risus. Amet lobortis
              nibh urna porta augue et nunc id. Blandit habitant at metus
              volutpat orci diam.
            </p>
          </div>
          <div className="pb-[91px]">
            <ul className="lg:flex lg:justify-center lg:gap-[30px] grid grid-cols-2">
              <li>
                <button
                  onClick={() => handleActive(1)}
                  className={`${
                    activenumber == 1
                      ? " bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px] "
                      : "deptbutton"
                  }`}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(2)}
                  className={`${
                    activenumber == 2
                      ? "bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px] "
                      : "deptbutton"
                  }`}
                >
                  Tom Shed
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(3)}
                  className={`${
                    activenumber == 3
                      ? "bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px]"
                      : "deptbutton"
                  }`}
                >
                  RunIt
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(4)}
                  className={`${
                    activenumber == 4
                      ? "bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px] "
                      : "deptbutton"
                  }`}
                >
                  Maverick Moving Co
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(5)}
                  className={`${
                    activenumber == 5
                      ? "bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px] "
                      : "deptbutton"
                  }`}
                >
                  Five Points of Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(6)}
                  className={`${
                    activenumber == 6
                      ? "bg-[#FFB000] font-medium text-[14px] lg:text-[18px] text-[#000000] leading-[168%] py-[10px] px-[20px] lg:py-[15px] lg:px-[30px] rounded-[4px] "
                      : "deptbutton"
                  }`}
                >
                  Dolphin Trail
                </button>
              </li>
            </ul>
          </div>
          {/* ---------------card start------------------ */}
          {activenumber == 1 ? (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10 ">
              <div className=" pb-[20px] md:pb-[24px] lg:pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] flex justify-center items-center">
                  <img src={deptimageone} alt="deptimageone"/>
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Tom Shed
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px] ">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagetwo} alt="deptimagetwo" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Runlt
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagethree} alt="deptimagethree" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Maverick Moving Co.
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagefour} alt="deptimagefour" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Tom Shed
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagefive} alt="deptimagefive" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Five points of life
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagesix} alt="deptimagesix" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Dolphin Trail
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          ) : activenumber == 2 ? (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10">
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] flex justify-center items-center">
                  <img src={deptimageone} alt="deptimageone" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Tom Shed
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          ) : activenumber == 3 ? (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10">
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px] ">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagetwo} alt="deptimagetwo" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Runlt
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          ) : activenumber == 4 ? (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10">
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagefour} alt="deptimagefour" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Tom Shed
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          ) : activenumber == 5 ? (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10">
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagefive} alt="deptimagefive" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Five points of life
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-10">
              <div className=" pb-[28px] border border-[#DEDDFF] rounded-[14px]">
                <div className="bg-[#DEDDFF]/50 rounded-t-[14px] h-[425px] flex justify-center items-center ">
                  <img src={deptimagesix} alt="deptimagesix" />
                </div>
                <div className="ml-[27px]">
                  <h3 className="font-semibold text-[20px] lg:text-[24px] text-[#000000] leading-[158%] mt-4 lg:mt-5">
                    Dolphin Trail
                  </h3>
                  <p className="font-medium text-[16px] lg:text-[18px] text-[#667786] leading-[138%] mt-2 lg:mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SoftwareDept;
