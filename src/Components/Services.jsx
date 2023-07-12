import React from "react";
import "./Services.css";
import serviceImg from "../assets/front.jpg";

const Services = () => {
  return (
    <div>
      <div className='service d-flex align-items-center justify-content-center my-10'>
        <div className='container'>
          {/* Row1 */}
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='row gap-4'>
                <h2>What Services We Are Offering</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <img src={serviceImg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
