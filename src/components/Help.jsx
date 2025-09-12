import React from "react";
import { Link } from "react-router";

const Help = () => {
  return (
    <div>
      <section className='relative bg-[url("/image/helpimage.png")] bg-cover bg-center pt-12 sm:pt-24 md:pt-[138px] pb-12 sm:pb-24 md:pb-[161px]'>
        {/* Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(-90deg, #000227e6 0%, #00022de6 19%, #00010fe6 41%, #00000066 100%)",
          }}
        ></div>

        {/* Content */}
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2 text-white px-4 sm:px-6 lg:px-0">
              <h4 className="relative font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-[180%] mb-4 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:bg-[#FFB000] after:w-[58px] after:h-[5px] after:transition-all after:duration-300">
                Who Do We Help
              </h4>
              <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[180%] mb-4 sm-w-full max-w-2xl">
                At MoMo, we love utilizing technology to bring global reach and
                impact to even the freshest of startup companies. Our high-end web
                solutions, insights, and apps will enable you to connect with your
                target audience and establish a global presence.
              </p>
              <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[180%] mb-6 sm-w-full max-w-2xl">
                We also offer our services direct to government bodies,
                enhancing their services as they cater to high-profile clients
                nationwide.
              </p>
              <Link
                to="/Contactpart"
                className="bg-[#FFB000] text-black px-4 sm:px-6 lg:px-8 py-2 rounded-md font-semibold hover:bg-transparent border border-[#FFB000] hover:text-[#FFB000] transition duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;