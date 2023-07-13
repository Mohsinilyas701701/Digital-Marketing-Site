import React from "react";
import "./Hero.css";
import CustomButton from "./CustomButton";
import HeroImg from "../assets/hero.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  AOS.init();
  return (
    <>
      <div className='hero d-flex align-items-center'>
        <div className='container'>
          <div className='row align-items-center'>
            {/* Hero Content */}
            <div
              className='col-md-6'
              data-aos='slide-right'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <div class='hero_content d-flex flex-column align-items-start gap-3'>
                <h1>Air, sleep, dream</h1>
                <p>Find and book a great experience.</p>
                <CustomButton buttonTitle='Create Your Account' />
              </div>
            </div>
            <div
              className='col-md-6'
              data-aos='slide-left'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <img src={HeroImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
