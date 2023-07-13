import React from "react";
import "./Services.css";
import serviceImg from "../assets/front.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Services = () => {
  return (
    <div>
      <div className='service d-flex align-items-center justify-content-center my-10'>
        <div className='container'>
          {/* Row1 */}
          <div className='row align-items-center justify-content-center'>
            <div
              className='col-lg-7'
              data-aos='slide-down'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <div className='row gap-4'>
                <h2>What Services We Are Offering</h2>
                {/* card1 */}
                <div class='database-leftcard d-flex align-items-center align-self-start py-4 px-3'>
                  <AiOutlineInfoCircle className='text-warning display-3' />
                  <div class='database-cardwrapper ps-3'>
                    <p>75% of Resumes are Screened Out by ATS without Human Review</p>
                  </div>
                </div>
                {/* card2 */}

                <div class='database-leftcard d-flex align-items-center align-self-center py-4 px-3'>
                  <AiOutlineInfoCircle className='text-warning display-3' />
                  <div class='database-cardwrapper ps-3'>
                    <p>98% Fortune 500 companies use ATS in their hiring workflow.</p>
                  </div>
                </div>
                {/* card3 */}

                <div class='database-leftcard d-flex align-items-center align-self-center py-4 px-3'>
                  <AiOutlineInfoCircle className='text-warning display-3' />
                  <div class='database-cardwrapper ps-3'>
                    <p>98% Fortune 500 companies use ATS in their hiring workflow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-5'
              data-aos='slide-up'
              data-aos-duration='4000'
              data-aos-delay='500'
              data-aos-easing='ease-in-out'
            >
              <img src={serviceImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
