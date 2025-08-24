import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
const Socialpackage = () => {
  return (
    <div>
      <section className="bg-[#F9F1E5] pt-20">
        <div className="container">
          <div className="text-center">
            <h1 className="text-[#000000] font-bold text-[36px] mb-4">
              Social Media Packages
            </h1>
            <h3 className="text-[#000000] font-regular text-[30px] mb-4">
              User-friendly / Responsive / Properly Optimized /Fully Functional
            </h3>
          </div>
          <table className="w-full border-collapse text-sm">
            <thead>
              {/* Main Header */}
              <tr className="bg-[#D94F00] font-semibold text-[18px] text-white text-left">
                <th className=" pl-8 text-start font-bold">
                  PACKAGES BY LEVEL SERVICES
                </th>
                <th className="p-3 font-bold text-center">BASIC WEBSITE</th>
                <th className="p-3 font-bold text-center">BUSINESS WEBSITE</th>
                <th className="p-3 font-bold text-center">PREMIUM WEBSITE</th>
              </tr>

              <tr className="bg-[#FFB000] font-bold text-[24px] text-white text-center">
                <th colSpan={4} className="p-2 font-bold">
                  <a href="">Research</a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">
                  Industry and Keyword Research
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-[#EFEFEF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Strategy Development</td>
                <td className="p-3 text-center">Overview</td>
                <td className="p-3 text-center">Overview</td>
                <td className="p-3 text-center">Consultation</td>
              </tr>

              {/* Section Header - Maintenance */}
              <tr className="bg-[#FFB000] font-bold text-[24px] text-white text-center">
                <th colSpan={4} className="p-2 font-bold">
                  <a href="">Maintenance</a>
                </th>
              </tr>
              <tr className="bg-[#FFFFFF]  font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Post Updates</td>
                <td className="p-3 text-center">3 per week/network</td>
                <td className="p-3 text-center">5 per week/network</td>
                <td className="p-3 text-center">1 per day/network</td>
              </tr>
              <tr className="bg-[#EFEFEF]font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">
                  Content (Text, Image and/or Video) Posting
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">On Scene Content</td>
                <td className="p-3 text-center"><FiMinus /></td>
                <td className="p-3 text-center"><FiMinus /></td>
                <td className="p-3">
                  <FaCheckCircle />
                </td>
              </tr>
              <tr className="bg-[#EFEFEF]font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Increase Network Popularity</td>
                <td className="p-3 text-center">30 minutes/week</td>
                <td className="p-3 text-center">45 minutes/week</td>
                <td className="p-3 text-center">90 minutes/week</td>
              </tr>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Increase Network Popularity</td>
                <td className="p-3 text-center">30 minutes/week</td>
                <td className="p-3 text-center">45 minutes/week</td>
                <td className="p-3 text-center">60 minutes/week</td>
              </tr>
              <tr className="bg-[#EFEFEF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">
                  Key Performance Metrics Reports
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Audience Interaction</td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-[#EFEFEF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Detailed Editorial Calendar</td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Monthly Client Conference</td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-[#EFEFEF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">
                  Monthly Full-Service Campaign Execution
                </td>
                <td className="p-3 text-center"><FiMinus /></td>
                <td className="p-3 text-center"><FiMinus /></td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>
              <tr className="bg-white font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Social Bookmarking</td>
                <td className="p-3 text-center"><FiMinus /></td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
                <td className="p-3 ">
                  <FaCheckCircle className="text-[#0DA02D]" />
                </td>
              </tr>

              {/* Section Header - Research */}
              <tr className="bg-[#FFB000] font-bold text-[24px] text-white text-center">
                <th colSpan={4} className="p-2 font-bold">
                  Research
                </th>
              </tr>
              <tr className="bg-[#EFEFEF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">
                  Blog Creation (roughly 500 words)
                </td>
                <td className="p-3 text-center">Consultation Required</td>
                <td className="p-3 text-center">Consultation Required</td>
                <td className="p-3 text-center">Consultation Required</td>
              </tr>
              <tr className="bg-[#FFFFFF] font-medium text-[18px] text-[#585858]">
                <td className="pl-8 text-start">Optimized Post Boosting</td>
                <td className="p-3 text-center">20%</td>
                <td className="p-3 text-center">20%</td>
                <td className="p-3 text-center">20%</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center py-[70px] ">
            <button className="bg-[#FFB000] border-2 border-transparent text-white py-[13px] px-[40px] mt-[38px] rounded-[6px] text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all ">
              Request A Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Socialpackage;

// import React from 'react';

// const ServicePackages = () => {
//   return (
//     <div className="container mx-auto p-4 bg-gray-100">
//       {/* টেবিলের শিরোনাম */}
//       <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">প্যাকেজগুলো সার্ভিস লেভেল অনুযায়ী</h2>

//       {/* টেবিল */}
//       <table className="w-full bg-white border-collapse">
//         {/* টেবিল হেডার */}
//         <thead>
//           <tr className="bg-orange-500 text-white">
//             <th className="border border-gray-300 p-2"></th>
//             <th className="border border-gray-300 p-2">বেসিক ওয়েবসাইট</th>
//             <th className="border border-gray-300 p-2">বিজনেস ওয়েবসাইট</th>
//             <th className="border border-gray-300 p-2">প্রিমিয়াম ওয়েবসাইট</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* রিসার্চ সেকশন */}
//           <tr className="bg-yellow-300">
//             <td className="border border-gray-300 p-2 font-bold">রিসার্চ</td>
//             <td className="border border-gray-300 p-2"></td>
//             <td className="border border-gray-300 p-2"></td>
//             <td className="border border-gray-300 p-2"></td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">ইন্ডাস্ট্রি এবং কিওয়ার্ড রিসার্চ</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">স্ট্র্যাটেজি ডেভেলপমেন্ট</td>
//             <td className="border border-gray-300 p-2">ওভারভিউ</td>
//             <td className="border border-gray-300 p-2">ওভারভিউ</td>
//             <td className="border border-gray-300 p-2">কনসালটেশন</td>
//           </tr>

//           {/* মেইনটেন্যান্স সেকশন */}
//           <tr className="bg-yellow-300">
//             <td className="border border-gray-300 p-2 font-bold">মেইনটেন্যান্স</td>
//             <td className="border border-gray-300 p-2"></td>
//             <td className="border border-gray-300 p-2"></td>
//             <td className="border border-gray-300 p-2"></td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">পোস্ট আপডেটস</td>
//             <td className="border border-gray-300 p-2">৩ প্রতি সপ্তাহ/নেটওয়ার্ক</td>
//             <td className="border border-gray-300 p-2">৫ প্রতি সপ্তাহ/নেটওয়ার্ক</td>
//             <td className="border border-gray-300 p-2">১ প্রতি দিন/নেটওয়ার্ক</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">কন্টেন্ট (টেক্সট, ইমেজ এবং/অথবা ভিডিও) পোস্টিং</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">অন সিন কন্টেন্ট</td>
//             <td className="border border-gray-300 p-2">-</td>
//             <td className="border border-gray-300 p-2">-</td>
//             <td className="border border-gray-300 p-2 text-green-600">✓</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300 p-2">নেটওয়ার্ক পপুলারিটি বাড়ানো</td>
//             <td className="border border-gray-300 p-2">৩০ মিনিট/সপ্তাহ</td>
//             <td className="border border-gray-300 p-2">৪৫ মিনিট/সপ্তাহ</td>
//             <td className="border border-gray-300 p-2">৯০ মিনিট/সপ্তাহ</td>
//           </tr>
//           {/* অন্যান্য সারি যোগ করতে পারেন */}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ServicePackages;
