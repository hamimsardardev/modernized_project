import React from "react";
import marketingimage from "../../assets/images/marketingimage.png";

const SocialMarketing = () => {
  return (
    <>
      <section className="py-[100px] md:py-[120px]lg:py-[170px]">
        <div className="container">
          <div className="lg:flex lg:justify-between md:flex md:justify-between items-center">
            <div className="flex justify-end ">
              <img
                className=" self-end"
                src={marketingimage}
                alt="marketingimage"
              />
            </div>
            <div>
              <h2 className="text-[30px] font-semibold mt-[50px] mb-10 md:text-[36px] md:font-bold md:mt-[62px] md:mb-14 lg:text-[40px] lg:font-bold text-[#012645] lg:mt-[82px] lg:mb-16">
                Social Media Marketing
              </h2>
              <p className="text-[16px] mb-3 w-auto md:text-[18px] md:mb-3 md:w-auto lg:text-[18px] font-regular text-[#012645] lg:mb-4 lg:w-[706px] ">
                We got our start offering unique opportunities for software
                companies to serve their clients in Florida and Georgia and now
                we're expanding that approach nationwide, shaping software to
                the needs of your audience. Every solution is unique, with the
                only constants across our projects being responsive, reliable,
                and scalable frameworks.
              </p>
              <p className="text-[16px] mb-3 w-auto md:text-[18px] md:mb-3 md:w-auto lg:text-[18px] font-regular text-[#012645] lg:mb-4 lg:w-[706px]">
                Our software engineers bring over a decade of experience in
                creating dynamic, innovative ERP (Enterprise Resource Planning)
                applications. Processes as complicated as inventory and
                accounting are made simple with our optimized approach to
                critical business procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMarketing;
