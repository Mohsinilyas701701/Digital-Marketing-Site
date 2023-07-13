import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div className='Intro d-flex align-items-center'>
        <div className='container'>
          <div
            className='row d-flex justify-content-center text-center'
            data-aos='slide-right'
            data-aos-duration='4000'
            data-aos-delay='500'
            data-aos-easing='ease-in-out'
          >
            {/* Content */}
            <div className='col-10'>
              <div className='row gap-4'>
                <h2>Web Design Company in Dubai</h2>
                <p>
                  Element 8 is a result-driven website design company and digital agency based in
                  Dubai. Our skilled in-house team provides website development, Magento e-commerce,
                  mobile applications, social media & SEO services. We have extensive experience and
                  a track record that ensures your website connects meaningfully with your
                  customers. Our approach looks beyond immediate business needs to frame your
                  website design & digital marketing project as an ongoing extension of your Brand’s
                  core promise.
                </p>
              </div>

              {/* Stats */}
              <div
                className='row py-5 justify-content-center'
                data-aos='slide-left'
                data-aos-duration='4000'
                data-aos-delay='500'
                data-aos-easing='ease-in-out'
              >
                <div className='col-md-3 border border-1 p-5'>
                  <div className='row'>
                    <h3>20+</h3>
                    <p>in-house Team</p>
                  </div>
                </div>
                <div className='col-md-3 border border-1 p-5'>
                  <div className='row'>
                    <h3>20+</h3>
                    <p>in-house Team</p>
                  </div>
                </div>
                <div className='col-md-3 border border-1 p-5'>
                  <div className='row'>
                    <h3>20+</h3>
                    <p>in-house Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
