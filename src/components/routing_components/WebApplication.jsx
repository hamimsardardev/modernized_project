import React from "react";
import webimage from "../../assets/images/webimage.png";
import webentimage from "../../assets//images/webentimage.png";

const WebApplication = () => {
  return (
    <>
      <section className="bg-[#EFF2FF] py-10">
        <div className="container">
          <div>
            <ul className="lg:flex lg:gap-1 grid grid-cols-2 gap-1">
              <li className="weblist border-1 border-[#CBD3FF]">
                <a href="#">Enterprise Applications</a>
              </li>
              <li className="weblist border-1 border-[#CBD3FF]">
                <a href="#">Saas Application</a>
              </li>
              <li className="weblist border-1 border-[#CBD3FF]">
                <a href="#">E - Commerce</a>
              </li>
              <li className="weblist border-1 border-[#CBD3FF]">
                <a href="#">Legacy Software</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[40px] font-bold text-[#012645] mt-[82px] mb-16">
                Enterprise Applications
              </h2>
              <p className="text-[18px] font-regular text-[#012645] mb-4 w-[706px]">
                We got our start offering unique opportunities for software
                companies to serve their clients in Florida and Georgia and now
                we're expanding that approach nationwide, shaping software to
                the needs of your audience. Every solution is unique, with the
                only constants across our projects being responsive, reliable,
                and scalable frameworks.
              </p>
              <p className="text-[18px] font-regular text-[#012645] mb-4 w-[706px]">
                Our software engineers bring over a decade of experience in
                creating dynamic, innovative ERP (Enterprise Resource Planning)
                applications. Processes as complicated as inventory and
                accounting are made simple with our optimized approach to
                critical business procedures.
              </p>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-10 flex-shrink-0"></span>
                  <p className="w-[644px]">
                    From customer databases to inventory tracking software – you
                    need software that's well-designed, secure, and striking in
                    an increasingly competitive market.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-10 flex-shrink-0"></span>
                  <p className="w-[644px]">
                    We believe in the fundamentals, such as troubleshooting and
                    optimization, in order to create software that lasts.
                    Regardless of the size of your organization, we keep an
                    emphasis on these traits as we cater to your unique goals.
                  </p>
                </li>
              </ul>
              <img className="mt-4" src={webimage} alt="webimage" />
            </div>
            <div className="flex justify-end ">
              <img className=" self-end" src={webentimage} alt="webentimage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebApplication;
