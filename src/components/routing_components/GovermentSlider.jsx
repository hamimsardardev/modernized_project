import appImage from "../../assets/images/appsbannerimage.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AppSlider() { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // সেন্টার মোডে ৩টি স্লাইড ফোকাসে
    slidesToScroll: 1,
    centerMode: true, // সেন্টার মোড চালু
    centerPadding: "30px", // বাম ও ডান প্যাডিং ৩০ পিক্সেল
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <div className="container">
      <div>
        <Slider {...settings}>
          <div>
            <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
              <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
                iOS App Development
              </h4>
              <p className="font-light text-lg text-white mb-4 leading-relaxed">
                With comprehensive experience that’s been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you’re planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-lg text-white block leading-relaxed">
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
            <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
              <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
                iOS App Development
              </h4>
              <p className="font-light text-lg text-white mb-4 leading-relaxed">
                With comprehensive experience that’s been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you’re planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-lg text-white block leading-relaxed">
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
            <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
              <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
                iOS App Development
              </h4>
              <p className="font-light text-lg text-white mb-4 leading-relaxed">
                With comprehensive experience that’s been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you’re planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-lg text-white block leading-relaxed">
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
            <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg max-w-xl mx-auto">
              <h4 className="font-bold text-3xl md:text-4xl text-white mb-4">
                iOS App Development
              </h4>
              <p className="font-light text-lg text-white mb-4 leading-relaxed">
                With comprehensive experience that’s been cultivated over the
                past 14 years – beginning when the iPhone was first announced -
                our mobile app developers are equipped to bring your vision to
                life whether you’re planning to launch on iPhone, iPad, Apple
                Watch, or any other Apple Device or platform.
              </p>
              <span className="font-light text-lg text-white block leading-relaxed">
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
      
      <div className="flex justify-center items-center py-[120px] mx-auto">
        <img src={appImage} alt="appImage" />
      </div>
    </div>
  );
}
export default AppSlider;