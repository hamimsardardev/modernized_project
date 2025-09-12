import appImage from "../../assets/images/appsbannerimage.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppSlider() { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="my-8 sm:my-12 lg:my-16">
        <Slider {...settings}>
          <div>
            <div className="bg-[#FFB000] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 shadow-lg max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                iOS App Development
              </h4>
              <p className="font-light text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                With comprehensive experience that's been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you're planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-sm sm:text-base lg:text-lg text-white block leading-relaxed">
                We offer full-stack development and believe in high class
                applications that are scalable, intuitive, and aesthetic.
                Proficient in Objective-C, Swift, C3, and more, we use our years
                of experience developing apps for smartphones and tablets to set
                you up for success while making sure to place consumer
                experience at the forefront of development.
              </span>
            </div>
          </div>
          <div>
            <div className="bg-[#FFB000] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 shadow-lg max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                iOS App Development
              </h4>
              <p className="font-light text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                With comprehensive experience that's been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you're planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-sm sm:text-base lg:text-lg text-white block leading-relaxed">
                We offer full-stack development and believe in high class
                applications that are scalable, intuitive, and aesthetic.
                Proficient in Objective-C, Swift, C3, and more, we use our years
                of experience developing apps for smartphones and tablets to set
                you up for success while making sure to place consumer
                experience at the forefront of development.
              </span>
            </div>
          </div>
          <div>
            <div className="bg-[#FFB000] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 shadow-lg max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                iOS App Development
              </h4>
              <p className="font-light text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                With comprehensive experience that's been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you're planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-sm sm:text-base lg:text-lg text-white block leading-relaxed">
                We offer full-stack development and believe in high class
                applications that are scalable, intuitive, and aesthetic.
                Proficient in Objective-C, Swift, C3, and more, we use our years
                of experience developing apps for smartphones and tablets to set
                you up for success while making sure to place consumer
                experience at the forefront of development.
              </span>
            </div>
          </div>
          <div>
            <div className="bg-[#FFB000] rounded-2xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 shadow-lg max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
              <h4 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                iOS App Development
              </h4>
              <p className="font-light text-sm sm:text-base lg:text-lg text-white mb-3 sm:mb-4 leading-relaxed">
                With comprehensive experience that's been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you're planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-sm sm:text-base lg:text-lg text-white block leading-relaxed">
                We offer full-stack development and believe in high class
                applications that are scalable, intuitive, and aesthetic.
                Proficient in Objective-C, Swift, C3, and more, we use our years
                of experience developing apps for smartphones and tablets to set
                you up for success while making sure to place consumer
                experience at the forefront of development.
              </span>
            </div>
          </div>
        </Slider>
      </div>
      
      <div className="flex justify-center items-center py-16 sm:py-20 lg:py-[120px] mx-auto">
        <img src={appImage} alt="appImage" className="max-w-full h-auto w-full sm:w-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
export default AppSlider;