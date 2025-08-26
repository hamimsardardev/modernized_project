import React from "react";
import ContractBanner from "../routing_components/ContractBanner";
import ContactLogin from "../routing_components/ContactLogin";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop"


const ContractPart = () => {
  return (
    <div>
      <ScrollToTop/>
      <ContractBanner />
      <ContactLogin />
      <ContactUs />
    </div>
  );
};

export default ContractPart;
