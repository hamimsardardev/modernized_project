import React from "react";
import clintsimage from "../assets/images/clintsimage.png";

const ClintsPart = () => {
  return (
    <>
      <section className="mt-[100px] md:mt-[100px] lg:mt-[100px] mb-[100px] md:mb-[100px]  sm:mb-12 lg:mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center lg:items-start">
            {/* Image Part */}
            <div className="w-full lg:w-[45%] flex justify-center items-center lg:justify-start">
              <img
                src={clintsimage}
                alt="clintsimage"
                className=" lg:max-w-full w-full rounded-lg shadow-md"
              />
            </div>

            {/* Text Part */}
            <div className="w-full lg:w-[55%] mt-8 lg:mt-0 lg:text-left">
              <h2 className="text-[#012645] font-bold text-[24px] md:text-[28px] lg:text-[30px] mb-[15px] lg:w-[684px] leading-tight">
                All Encompassing Software Solutions for Florida, Georgia, &
                National Clients
              </h2>
              <p className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] mb-[30px] md:mb-[40px] lg:mb-[45px] leading-relaxed">
                Modernized Mobile is one of the leading web design and digital
                marketing companies serving clients nationwide. The reason for
                our success? We combine the innovative with the analytical in
                every project, tackling solutions from fresh and unique angles
                while optimizing the impact our clients can have in their niche.
              </p>
              <span className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] block leading-relaxed">
                We’ve been at it since 2017 and we’re only expanding – from
                serving clients in Florida and Georgia to impacting the digital
                space nationwide
              </span>
              <p className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] mt-[30px] md:mt-[40px] lg:mt-[45px] leading-relaxed">
                Our team is young, bold, and passionate – exactly what’s needed
                to ensure we bring fresh perspectives to the table as we design
                reliable and robust software. We’re always researching, testing,
                and workshopping our solutions to make sure we’re as efficient
                and modern as possible to meet your high standards.
              </p>
              <h4 className="text-[#012645] font-bold text-[16px] md:text-[17px] lg:text-[18px] mt-[30px] md:mt-[40px] lg:mt-[45px] leading-tight">
                Oh, and you can call us MoMo for short.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClintsPart;
