import React from 'react'
import webannerimage from "../../assets/images/webbannerimage.png";
const WebBanner = () => {
  return (
    <div>
        <section className="bg-[#F3FFF7]">
                <div className="container">
                  <div className="grid grid-cols-2 items-center gap-6 pt-[114px]">
                    <div>
                      <h1 className="font-medium text-[#000000] text-[72px]">Web</h1>
                      <span className="font-bold text-[72px]  text-[#FFB000]">
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