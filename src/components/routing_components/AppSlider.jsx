import appImage from "../../assets/images/appsbannerimage.png";
import React, { useEffect, useState } from "react";

function AppSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 1000); 
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3">
        <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
          <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
            iOS App Development
          </h4>
          <p className="font-light text-lg text-white mb-4 leading-relaxed">
            With comprehensive experience that’s been cultivated over the past
            14 years – beginning when the iPhone was first announced - our
            mobile app developers are equipped to bring your vision to life
            whether you’re planning to launch on iPhone, iPad, Apple Watch, or
            any other Apple Device or platform.
          </p>
          <span className="font-light text-lg text-white block leading-relaxed">
            We offer full-stack development and believe in high class
            applications that are scalable, intuitive, and aesthetic. Proficient
            in Objective-C, Swift, C3, and more, we use our years of experience
            developing apps for smartphones and tablets to set you up for
            success while making sure to place consumer experience at the
            forefront of development.
          </span>
        </div>
        <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
          <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
            iOS App Development
          </h4>
          <p className="font-light text-lg text-white mb-4 leading-relaxed">
            With comprehensive experience that’s been cultivated over the past
            14 years – beginning when the iPhone was first announced - our
            mobile app developers are equipped to bring your vision to life
            whether you’re planning to launch on iPhone, iPad, Apple Watch, or
            any other Apple Device or platform.
          </p>
          <span className="font-light text-lg text-white block leading-relaxed">
            We offer full-stack development and believe in high class
            applications that are scalable, intuitive, and aesthetic. Proficient
            in Objective-C, Swift, C3, and more, we use our years of experience
            developing apps for smartphones and tablets to set you up for
            success while making sure to place consumer experience at the
            forefront of development.
          </span>
        </div>
        <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
          <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
            iOS App Development
          </h4>
          <p className="font-light text-lg text-white mb-4 leading-relaxed">
            With comprehensive experience that’s been cultivated over the past
            14 years – beginning when the iPhone was first announced - our
            mobile app developers are equipped to bring your vision to life
            whether you’re planning to launch on iPhone, iPad, Apple Watch, or
            any other Apple Device or platform.
          </p>
          <span className="font-light text-lg text-white block leading-relaxed">
            We offer full-stack development and believe in high class
            applications that are scalable, intuitive, and aesthetic. Proficient
            in Objective-C, Swift, C3, and more, we use our years of experience
            developing apps for smartphones and tablets to set you up for
            success while making sure to place consumer experience at the
            forefront of development.
          </span>
        </div>
      </div>
      <div className="button">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-3 shadow-md hover:bg-gray-200"
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center items-center py-[120px] mx-auto">
        <img src={appImage} alt="appImage" />
      </div>
    </div>
  );
}

export default AppSlider;
