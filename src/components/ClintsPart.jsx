import React from "react";
import clintsimage from "../assets/images/clintsimage.png";

const ClintsPart = () => {
  return (
    <>
      <section className="mt-[100px] md:mt-[100px] lg:mt-[100px] mb-[100px] md:mb-[100px] lg:mb-[100px]">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
            {/* Image Part */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
              <img
                src={clintsimage}
                alt="clintsimage"
                className="max-w-[400px] md:max-w-[500px] lg:max-w-full"
              />
            </div>

            {/* Text Part */}
            <div className="w-full lg:w-[55%] mt-8 lg:mt-0">
              <h2 className="text-[#012645] font-bold text-[24px] md:text-[28px] lg:text-[30px] mb-[15px] lg:w-[684px]">
                All Encompassing Software Solutions for Florida, Georgia, & National Clients
              </h2>
              <p className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] mb-[30px] md:mb-[40px] lg:mb-[45px]">
                Modernized Mobile is one of the leading web design and digital marketing companies
                serving clients nationwide. The reason for our success? We combine the innovative
                with the analytical in every project, tackling solutions from fresh and unique
                angles while optimizing the impact our clients can have in their niche.
              </p>
              <span className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] block">
                We’ve been at it since 2017 and we’re only expanding – from serving clients in
                Florida and Georgia to impacting the digital space nationwide
              </span>
              <p className="text-[#012645] font-normal text-[16px] md:text-[17px] lg:text-[18px] mt-[30px] md:mt-[40px] lg:mt-[45px]">
                Our team is young, bold, and passionate – exactly what’s needed to ensure we bring
                fresh perspectives to the table as we design reliable and robust software. We’re
                always researching, testing, and workshopping our solutions to make sure we’re as
                efficient and modern as possible to meet your high standards.
              </p>
              <h4 className="text-[#012645] font-bold text-[16px] md:text-[17px] lg:text-[18px] mt-[30px] md:mt-[40px] lg:mt-[45px]">
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
