
import Banner from "./Components/Banner";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Section from "./Components/Section";
import WhyUs from "./Components/WhyUs";
import Hero from "./Components/Hero";

function app() {
  return (
    <div className="App">
      {/* <Banner />
      <Faq />
      <Footer />
      <Hero /> */}
      <Section />
      {/* <WhyUs /> */}
    </div>
  );
};

export default app;