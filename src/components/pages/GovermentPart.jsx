import React from "react";
import GovermentBanner from "../routing_components/GovermentBanner";
import GovermentSlider from "../routing_components/GovermentSlider";
import GovermentComondity from "../routing_components/GovermentComondity";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop";

const GovermentPart = () => {
  return (
    <div>
      <ScrollToTop />
      <GovermentBanner />
      <GovermentSlider />
      <GovermentComondity />
      <ContactUs />
    </div>
  );
};

export default GovermentPart;
