import React from "react";
import Banner from "../Banner";
import ClintsPart from "../ClintsPart";
import Card from "../Card";
import Team from "../Team";
import ChimeApp from "../ChimeApp";
import Features from "../Features";
import Help from "../Help";
import ContactUs from "../ContactUs";
import ScrollToTop from "../ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <ClintsPart />
      <Card />
      <Team />
      <ChimeApp />
      <Features />
      <Help />
      <ContactUs />
    </>
  );
};

export default Home;
