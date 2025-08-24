import React from "react";
import clintsimage from "../assets/images/clintsimage.png";

const ClintsPart = () => {
  return (
    <>
      <section className="mt-[240px] mb-[220px]">
        <div className="container">
          <div className="flex">
            <div className="w-[45%]">
              <img src={clintsimage} alt="clintsimage" />
            </div>
            <div className="w-[55%]">
              <h2 className="text-[#012645] font-bold text-[30px] mb-[15px] w-[684px]">
                All Encompassing Software Solutions for Florida, Georgia, &
                National Clients
              </h2>
              <p className="text-[#012645] font-normal text-[18px] mb-[45px]">
                Modernized Mobile is one of the leading web design and digital
                marketing companies serving clients nationwide. The reason for
                our success? We combine the innovative with the analytical in
                every project, tackling solutions from fresh and unique angles
                while optimizing the impact our clients can have in their niche.
              </p>
              <span className="text-[#012645] font-normal text-[18px]">
                We’ve been at it since 2017 and we’re only expanding – from
                serving clients in Florida and Georgia to impacting the digital
                space nationwide
              </span>
              <p className="text-[#012645] font-normal text-[18px] mt-[45px]">
                Our team is young, bold, and passionate – exactly what’s needed
                to ensure we bring fresh perspectives to the table as we design
                reliable and robust software. We’re always researching, testing,
                and workshopping our solutions to make sure we’re as efficient
                and modern as possible to meet your high standards.
              </p>
              <h4 className="text-[#012645] font-bold text-[18px] mt-[45px]">
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
