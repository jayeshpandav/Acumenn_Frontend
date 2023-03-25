import React from "react";
import "./styles/hero.css";
import img from "./images/banner1.png";

const Hero = () => {
  return (
    <>
      <section className="herosection" style={{ zIndex: "-456" }}>
        {/* <img src={img} alt="" /> */}
        <div className="container text-center banner1">
          <span>Acumenn Money</span>
        </div>
        <div className=" banner container">
          With 30 years of experience in stocks and mutual funds we'd say you've
          come to the right place for investments. We'll help you exlpore and
          understand various investment opportunities in the world of mutual
          funds and stock markets.
        </div>
      </section>
    </>
  );
};

export default Hero;
