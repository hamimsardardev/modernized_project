import React from 'react'
import govbannerimage from "../../assets/images/govbannerimage.png";
const GovermentBanner = () => {
  return (
    <div>
        <section className="bg-[#F3FFF7] mb-[177px]">
                <div className="container">
                  <div className="grid grid-cols-2 items-center gap-6 pt-[114px]">
                    <div>
                      <h1 className="font-medium text-[#000000] text-[72px]">Government </h1>
                      <span className="font-bold text-[72px]  text-[#FFB000]">
                       Contracting
                      </span>
                    </div>
                    <div>
                      <img src={govbannerimage} alt="govbannerimage" />
                    </div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default GovermentBanner