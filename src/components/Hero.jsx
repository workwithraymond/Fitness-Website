import HeroSecond from "./HeroSecond";
import Services from "./Services";
import React from 'react'

export const Hero = () => {
  return (
    <><section className="hero" id="home">
      <div className="hero-banner">
        <h1>Welcome To GymRatz</h1>
        <p>
          Become a More Confident And Better Athlete
        </p>
        <a href="#tours" className="btn hero-btn">Learn More</a>
      </div>


    </section><div>
        <HeroSecond />
      </div></>
  );
};

export default Hero;