import React, { Component } from "react";
import Slider from "react-slick";
import appImage from "../../assets/images/appsbannerimage.png";

function AppSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    
  };
  return (
    <div className="container ">
      <Slider {...settings}>
      <div>
         <div className="bg-[#FFB000] rounded-[12px] px-[54px] py-[121px]">
            <h4 className="font-bold text-[36px] text-[#FFFFFF] mb-[50px]">
              iOS App Development
            </h4>
            <p className="font-normal text-[18px] text-[#ffffff] w-auto mb-[30px]">
              With comprehensive experience that’s been cultivated over the past
              14 years – beginning when the iPhone was first announced - our
              mobile app developers are equipped to bring your vision to life
              whether you’re planning to launch on iPhone, iPad, Apple Watch, or
              any other Apple Device or platform.
            </p>
            <span className="font-normal text-[18px] text-[#FFFFFF] block w-auto">
              We offer full-stack development and believe in high class
              applications that are scalable, intuitive, and aesthetic.
              Proficient in Objective-C, Swift, C3, and more, we use our years
              of experience developing apps for smartphones and tablets to set
              you up for success while making sure to place consumer experience
              at the forefront of development.
            </span>
          </div>
      </div>
      <div>
         <div className="bg-[#FFB000] rounded-[12px] px-[54px] py-[121px]">
            <h4 className="font-bold text-[36px] text-[#FFFFFF] mb-[77px]">
              iOS App Development
            </h4>
            <p className="font-normal text-[18px] text-[#ffffff] w-auto mb-[30px]">
              With comprehensive experience that’s been cultivated over the past
              14 years – beginning when the iPhone was first announced - our
              mobile app developers are equipped to bring your vision to life
              whether you’re planning to launch on iPhone, iPad, Apple Watch, or
              any other Apple Device or platform.
            </p>
            <span className="font-normal text-[18px] text-[#FFFFFF] block w-auto">
              We offer full-stack development and believe in high class
              applications that are scalable, intuitive, and aesthetic.
              Proficient in Objective-C, Swift, C3, and more, we use our years
              of experience developing apps for smartphones and tablets to set
              you up for success while making sure to place consumer experience
              at the forefront of development.
            </span>
          </div>
      </div>
      <div>
        <div className="bg-[#FFB000] rounded-[12px] px-[54px] py-[121px]">
            <h4 className="font-bold text-[36px] text-[#FFFFFF] mb-[77px]">
              iOS App Development
            </h4>
            <p className="font-normal text-[18px] text-[#ffffff] w-auto mb-[30px]">
              With comprehensive experience that’s been cultivated over the past
              14 years – beginning when the iPhone was first announced - our
              mobile app developers are equipped to bring your vision to life
              whether you’re planning to launch on iPhone, iPad, Apple Watch, or
              any other Apple Device or platform.
            </p>
            <span className="font-normal text-[18px] text-[#FFFFFF] block w-auto">
              We offer full-stack development and believe in high class
              applications that are scalable, intuitive, and aesthetic.
              Proficient in Objective-C, Swift, C3, and more, we use our years
              of experience developing apps for smartphones and tablets to set
              you up for success while making sure to place consumer experience
              at the forefront of development.
            </span>
          </div>
      </div>
      <div>
         <div className="bg-[#FFB000] rounded-[12px] px-[54px] py-[121px]">
            <h4 className="font-bold text-[36px] text-[#FFFFFF] mb-[77px]">
              iOS App Development
            </h4>
            <p className="font-normal text-[18px] text-[#ffffff] w-auto mb-[30px]">
              With comprehensive experience that’s been cultivated over the past
              14 years – beginning when the iPhone was first announced - our
              mobile app developers are equipped to bring your vision to life
              whether you’re planning to launch on iPhone, iPad, Apple Watch, or
              any other Apple Device or platform.
            </p>
            <span className="font-normal text-[18px] text-[#FFFFFF] block w-auto">
              We offer full-stack development and believe in high class
              applications that are scalable, intuitive, and aesthetic.
              Proficient in Objective-C, Swift, C3, and more, we use our years
              of experience developing apps for smartphones and tablets to set
              you up for success while making sure to place consumer experience
              at the forefront of development.
            </span>
          </div>
      </div>
      
    </Slider>
      <div className="flex justify-center items-center py-[120px] mx-auto">
        <img src={appImage} alt="appImage" />
      </div>
    </div>
  );

  
}

export default AppSlider;