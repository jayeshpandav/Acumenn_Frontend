import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Homepage;
