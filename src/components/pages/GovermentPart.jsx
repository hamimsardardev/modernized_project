import React from "react";
import GovermentBanner from "../routing_components/GovermentBanner";
import GovermentComondity from "../routing_components/GovermentComondity";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop";

const GovermentPart = () => {
  return (
    <div>
      <ScrollToTop />
      <GovermentBanner />     
      <GovermentComondity />
       <ContactUs /> 
    </div>
  );
};

export default GovermentPart;
