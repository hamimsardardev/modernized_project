import appImage from "../../assets/images/appsbannerimage.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCircleCheck } from "react-icons/ci";

function AppSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // সেন্টার মোডে ৩টি স্লাইড ফোকাসে
    slidesToScroll: 1,
    centerMode: true, // সেন্টার মোড চালু
    centerPadding: "350px", // বাম ও ডান প্যাডিং ৩০ পিক্সেল
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
    <section className="py-[200px] px-[200px]">
      <div className="container slide">
        <div>
          <Slider {...settings}>
            <div>
              <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg h-[640px] w-[540px] mx-auto newslide">
                <h4 className="font-bold text-[36px] text-white mb-[65px]">
                  Innovative iOS Software Developers
                </h4>
                <div>
                  <div>
                    <p className="font-medium text-[18px] text-white mb-4">
                      At Modernized Mobile, our goal is to empower our customers
                      through the creation of innovative tools to protect what
                      is essential as well as to improve the world and change
                      lives. We are more than an app developer.
                    </p>
                    <span className="inline-block font-normal text-[18px] text-white">
                      We merge mobile apps and web-based solutions with digital
                      marketing into one powerful, unified platform to help
                      companies truly engage and excite their audience
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg h-[640px] w-[540px] mx-auto">
                <h4 className="font-bold text-[36px] text-white mb-4 mt-[50px]">
                  Strategize, Design, Develop
                </h4>
                <div>
                  <div>
                    <p className="font-medium text-[18px] text-white mb-4">
                      We offer end-to-end strategy, design, development, growth
                      marketing, and execution of digital solutions for
                      government agencies. We do more than just creating great
                      digital products. We help you maximize the impact of your
                      mobile marketing efforts and connect with what matters the
                      most.
                    </p>
                    <div className="pb-[100px]">
                      <h4 className="font-bold text-[18px] text-[#6D1313] mt-5 mb-4">
                        We help you modernize your ideas with
                      </h4>
                      <ul className="grid grid-cols-2 font-bold text-[18px]">
                        <li className="flex items-center gap-3">
                          <CiCircleCheck className="text-xl flex-shrink-0" />
                          Impact
                        </li>
                        <li className="flex items-center gap-3">
                          <CiCircleCheck className="text-xl flex-shrink-0" />
                          Services
                        </li>
                        <li className="flex items-center gap-3">
                          <CiCircleCheck className="text-xl flex-shrink-0" />
                          Outreach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#FFB000] rounded-2xl px-8 py-10 shadow-lg h-[640px] w-[540px] mx-auto  ">
                <h4 className="font-bold text-3xl md:text-4xl text-white mb-4 mt-[85px]">
                  What Sets Us Apart
                </h4>
                <div>
                  <div className="pb-[100px]">
                    <ul className="list-none space-y-3 p-0 font-medium text-black text-[14px]">
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0" />
                        Impact
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0" />
                        Outreach
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0" />
                        Solution with a unique value
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0 text-nowrap" />
                        A world-class team of full-stack developers to achieve
                        breakthrough results
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0 text-nowrap" />
                        Blending in growth marketing product strategy, digital
                        design, and functionality
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0" />
                        Customer-centric business culture
                      </li>
                      <li className="flex items-center gap-3">
                        <CiCircleCheck className="text-xl flex-shrink-0" />
                        User-friendly and result-oriented solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div> 
      
    </section>
  );
}
export default AppSlider;
