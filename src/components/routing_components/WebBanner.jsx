import React from 'react'
import webannerimage from "../../assets/images/webbannerimage.png";
const WebBanner = () => {
  return (
    <div>
        <section className="bg-[#F3FFF7] lg:mb-[177px] mb-16  md:mb-[112px]">
                <div className="container">
                  <div className="lg:grid lg:grid-cols-2 items-center grid grid-cols-1 gap-4 lg:gap-6 pt-[100px] lg:pt-[114px]">
                    <div className='flex md:flex-col lg:flex-col gap-2 items-center lg:items-start'>
                      <h1 className="font-medium text-[#000000] text-[36px] lg:text-[72px] md:text-[56px] w-auto">Web</h1>
                      <span className="lg:font-bold font-semibold text-[36px] lg:text-[72px] md:text-[56px] text-[#FFB000] w-auto">
                        Development 
                      </span>
                    </div>
                    <div>
                      <img src={webannerimage} alt="webannerimage" />
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default WebBanner