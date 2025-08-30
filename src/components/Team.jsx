import React from "react";
import teamimage from "../assets/images/teamimage.png";
import { Link } from "react-router";

const Team = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="lg:flex mt-[30px]">
            <div className="lg:w-[60%]">
              <img src={teamimage} alt="teamimage" />
            </div>
            <div className="lg:w-[40%] lg:mt-[100px] mt-[40px]">
              <h2 className=" lg:w-[443px] w-full relative font-bold lg:text-[36px] sm:text-[30px] text-[#012645] leading-[136%] lg:mb-[66px] mb-[30px] after:content-[''] after:absolute after:left-[-27px] after:top-2 after:bg-[#4F52FF] after:w-[6px] after:h-[77px] ">
                The Team to Bring Your Business to the Forefront
              </h2>
              <span className=" lg:w-[619px] w-full font-regular lg:text-[18px] text-[16px] text-[#113350] ">
                Modernized Mobile produces mobile apps and software solutions
                designed for entrepreneurs that are ready to leave their mark on
                the industry.
              </span>
              <p className="lg:w-[619px] w-full font-regular lg:text-[18px] text-[16px] text-[#113350] lg:mt-[54px] mt-[30px]">
                As full-stack developers, we bring our expertise to handle any
                challenge our clients have when it comes to databases, servers,
                clients, or native applications. We’re an all-encompassing
                solution for your business needs, but we’re also just an
                extension of your desires. Whether you’re a brand-new startup or
                an expanding enterprise, consider us your partners in the
                process of bringing your business to the forefront of your
                industry.
              </p>
            </div>
          </div>
              <div className="flex justify-center">
                <Link to="/SuccessPart"
                className="bg-[#FFB000] text-black px-6 py-2 mt-8 mb-[193px]  rounded-md font-semibold 
            hover:bg-transparent border border-[#FFB000] hover:text-[#FFB000] transition"
              >
                Team Success
              </Link>
              </div>
        </div>
      </section>
    </>
  );
};

export default Team;
