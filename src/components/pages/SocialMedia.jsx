import React from "react";
import SocialMediabanner from "../routing_components/SocialMediabanner";
import SocialMarketing from "../routing_components/SocialMarketing";
import Socialpackage from "../routing_components/Socialpackage";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop";

const SocialMedia = () => {
  return (
    <div>
      <ScrollToTop />
      <SocialMediabanner />
      <SocialMarketing />
      <Socialpackage />
      <ContactUs />
    </div>
  );
};

export default SocialMedia;
