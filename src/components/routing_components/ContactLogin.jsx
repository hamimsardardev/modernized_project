import React from "react";

const ContactLogin = () => {
  return (
    <div>
      <section className="my-[70px]">
        <div className="container">
          <div className="font-semibold text-[60px] leading-{180%] text-[#000000] text-center">
            <h1>Trusted Software Development Company</h1>
          </div>
          <div className="bg-[#F9EFE2] flex gap-[94px] pl-[84px] pt-[74px] pr-[74px] pb-[103px]">
            <div className="">
              <h4 className="bg-[#FFB000] font-semibold text-[36px] leading-{180%] text-[#FFFFFF] text-center pt-[288px] pb-[258px] pl-[61px] pr-[160px] text-nowrap">
                Send Us a Message
              </h4>
            </div>
            <div>
              <form>
                <label className="block font-medium text-[18px] text-[#000000] mb-[14px]">
                  Name<span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="font-regular text-[16px] text-[#C1C1C1] bg-white border border-[#E3E3E3] rounded-md py-[19px] pl-[16px] pr-[178px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="font-regular text-[16px] text-[#C1C1C1] bg-white border border-[#E3E3E3] rounded-md py-[19px] pl-[16px] pr-[178px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Email & Phone */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block font-medium text-[18px] text-[#000000] mb-[14px]">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="font-regular text-[16px] text-[#C1C1C1] bg-white border border-[#E3E3E3] rounded-md py-[19px] pl-[16px] pr-[178px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-[18px] text-[#000000] mb-[14px]">
                        Phone<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+136 4 58 1647"
                        className="font-regular text-[16px] text-[#C1C1C1] bg-white border border-[#E3E3E3] rounded-md py-[19px] pl-[16px] pr-[178px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-medium text-[18px] text-[#000000] mb-[14px]">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="font-regular text-[16px] text-[#C1C1C1] bg-white border border-[#E3E3E3] rounded-md py-[19px] pl-[16px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-medium text-[18px] text-[#000000] mb-[14px] mt-6">
                    Message
                  </label>
                  <input
                    type="text"
                    placeholder="Enter message here"
                    rows="5"
                    className="font-regular text-[16px] text-[#C1C1C1] border bg-white border-[#E3E3E3] pb-[147px] pt-[19px] pl-[16px] w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  ></input>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#FFB000] border-2 border-transparent text-white py-[13px] px-[40px] mt-[38px] rounded-[6px] text-[18px] font-medium cursor-pointer hover:border-2 hover:border-[#FFB000] hover:bg-white hover:text-black hover:transition-all "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLogin;
