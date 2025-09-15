import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
const Socialpackage = () => {
  return (
    <>
      <section className="bg-[#F9F1E5] pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="text-center mx-auto py-6">
            <h1 className="text-[#000000] font-bold text-[26px] sm:text-[28px] md:text-[30px] lg:text-[36px] mb-4">
              Social Media Packages
            </h1>
            <h3 className="text-[#000000] font-regular text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] mb-4">
              User-friendly / Responsive / Properly Optimized /Fully Functional
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
              <thead>
                <tr className="bg-[#D94F00] font-regular text-[13px] sm:text-[15px] lg:text-[18px] text-white text-left">
                  <th className="p-2 sm:p-3 lg:pl-8 text-start font-normal md:font-semibold lg:font-bold whitespace-nowrap">
                    PACKAGES BY LEVEL SERVICES
                  </th>
                  <th className="p-2 sm:p-3 font-normal md:font-semibold lg:font-bold whitespace-nowrap">
                    BASIC WEBSITE
                  </th>
                  <th className="p-2 sm:p-3 font-normal md:font-semibold lg:font-bold whitespace-nowrap">
                    BUSINESS WEBSITE
                  </th>
                  <th className="p-2 sm:p-3 font-normal md:font-semibold lg:font-bold whitespace-nowrap">
                    PREMIUM WEBSITE
                  </th>
                </tr>

                <tr className="bg-[#FFB000] font-semibold text-[15px] sm:text-[18px] lg:text-[24px] text-white text-center">
                  <th
                    colSpan={4}
                    className="p-2 font-normal md:font-semibold lg:font-bold"
                  >
                    <a href="#">Research</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Industry and Keyword Research
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Strategy Development
                  </td>
                  <td className="p-2 sm:p-3 text-center">Overview</td>
                  <td className="p-2 sm:p-3 text-center">Overview</td>
                  <td className="p-2 sm:p-3 text-center">Consultation</td>
                </tr>
                {/* Section Header - Maintenance */}
                <tr className="bg-[#FFB000] font-bold text-[16px] sm:text-[18px] lg:text-[24px] text-white text-center">
                  <th
                    colSpan={4}
                    className="p-2 font-normal md:font-semibold lg:font-bold"
                  >
                    <a href="">Maintenance</a>
                  </th>
                </tr>
                <tr className="bg-[#FFFFFF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start w-auto">
                    Post Updates
                  </td>
                  <td className="p-2 sm:p-3 text-center w-auto">
                    3 per week/network
                  </td>
                  <td className="p-2 sm:p-3 text-center w-auto">
                    5 per week/network
                  </td>
                  <td className="p-2 sm:p-3 text-center w-auto">
                    1 per day/network
                  </td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Content (Text, Image and/or Video) Posting
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    On Scene Content
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FiMinus className="mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FiMinus className="mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Increase Network Popularity
                  </td>
                  <td className="p-2 sm:p-3 text-center">30 minutes/week</td>
                  <td className="p-2 sm:p-3 text-center">45 minutes/week</td>
                  <td className="p-2 sm:p-3 text-center">90 minutes/week</td>
                </tr>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Increase Network Popularity
                  </td>
                  <td className="p-2 sm:p-3 text-center">30 minutes/week</td>
                  <td className="p-2 sm:p-3 text-center">45 minutes/week</td>
                  <td className="p-2 sm:p-3 text-center">60 minutes/week</td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Key Performance Metrics Reports
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Audience Interaction
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Detailed Editorial Calendar
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Monthly Client Conference
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Monthly Full-Service Campaign Execution
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FiMinus className="mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FiMinus className="mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-white font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Social Bookmarking
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FiMinus className="mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <FaCheckCircle className="text-[#0DA02D] mx-auto" />
                  </td>
                </tr>
                <tr className="bg-[#FFB000] font-bold text-[16px] sm:text-[18px] lg:text-[24px] text-white text-center">
                  <th
                    colSpan={4}
                    className="p-2 font-normal md:font-semibold lg:font-bold"
                  >
                    Research
                  </th>
                </tr>
                <tr className="bg-[#EFEFEF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Blog Creation (roughly 500 words)
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    Consultation Required
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    Consultation Required
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    Consultation Required
                  </td>
                </tr>
                <tr className="bg-[#FFFFFF] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-[#585858]">
                  <td className="p-2 sm:p-3 lg:pl-8 text-start">
                    Optimized Post Boosting
                  </td>
                  <td className="p-2 sm:p-3 text-center">20%</td>
                  <td className="p-2 sm:p-3 text-center">20%</td>
                  <td className="p-2 sm:p-3 text-center">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center py-[40px] sm:py-[60px] lg:py-[70px]">
            <button className="bg-[#FFB000] border-2 border-transparent text-white py-[10px] sm:py-[12px] px-[20px] sm:px-[30px] lg:px-[40px] mt-[20px] sm:mt-[30px] lg:mt-[38px] rounded-[6px] text-[16px] sm:text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all">
              Request A Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Socialpackage;
