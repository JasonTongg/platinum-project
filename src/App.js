import React from "react";
import Section from "./Components/Section";
import Testimonial from "./Components/Testimonial";
import WhyUs from "./Components/WhyUs";
import Hero from "./Components/Hero";
// import DetailSewa from "./Pages/DetailSewa";
// import "./App.css";


function app() {
  return (
    <div>
      <Hero />
      <Section />
      <WhyUs />
      <Testimonial />
      {/* <DetailSewa /> */}
    </div>
  );
};

export default app;