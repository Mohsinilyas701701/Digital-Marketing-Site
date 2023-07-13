import React from "react";
import serviceImg from "../assets/front.jpg";
import { AiTwotoneStar } from "react-icons/ai";
import "./About.css";

const About = () => {
  return (
    <>
      <div className='about_us my-10'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-5'
              data-aos='zoom-in'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <img src={serviceImg} alt='' />
            </div>
            <div
              className='col-lg-7 px-5'
              data-aos='zoom-out'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <div className='row'>
                <h2>About Us</h2>
                <p>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
