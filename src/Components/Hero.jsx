import React from "react";
import "./Hero.css";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <>
      <div className='hero d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            {/* Hero Content */}
            <div class='hero_content d-flex flex-column align-items-start gap-3'>
              <h1>Air, sleep, dream</h1>
              <p>Find and book a great experience.</p>
              <CustomButton buttonTitle='Create Your Account' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
