import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./About.scss";
import aboutImg from "../../../assets/hero.png";

const About = () => {
  return (
    <>
      <div className='about_us'>
        <div className='container'>
          <div
            className='row align-items-center justify-content-center px-2'
            data-aos='fade-in'
            data-aos-delay='1000'
            data-aos-easing='ease-in-out'
            data-aos-duration='1500'
          >
            <div className='col-lg-7 px-5'>
              <div className='row about_us_wrapper'>
                <h2>
                  We Deliver <span className='fw-bolder'>Results</span>
                </h2>
                <p className='fw-bold ps-4 pt-3'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium esse
                  consectetur sapiente est fugit at, vero placeat odio nulla molestias? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Magni iusto corporis quis ratione
                  quasi eius non doloribus repudiandae adipisci iste!loremh-100 Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Officia, consequatur?
                </p>
                <div className='d-flex align-items-start pt-5'>
                  <AiTwotoneStar className='fs-2 text-warning me-4 mt-1' />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
                    consequatur.
                  </p>
                </div>
                <div className='d-flex align-items-start pt-5'>
                  <AiTwotoneStar className='fs-2 text-warning me-4 mt-1' />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
                    consequatur.
                  </p>
                </div>
                <div className='d-flex align-items-start pt-5'>
                  <AiTwotoneStar className='fs-2 text-warning me-4 mt-1' />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus,
                    consequatur.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-5'>
              <img src={aboutImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
