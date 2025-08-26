import React from "react";
import TeamSuccess from "../routing_components/TeamSuccess";
import SoftwareDept from "../routing_components/SoftwareDept";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop";

const SuccessPart = () => {
  return (
    <>
      <ScrollToTop />
      <TeamSuccess />
      <SoftwareDept />
      <ContactUs />
    </>
  );
};

export default SuccessPart;
