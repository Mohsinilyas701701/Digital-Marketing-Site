import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <div
        className='services my-10'
        data-aos='slide-right'
        data-aos-delay='500'
        data-aos-easing='ease-in-out'
        data-aos-duration='800'
      >
        <div className='container'>
          <div className='row justify-content-center text-center gap-3'>
            <h2>Our Services</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem impedit unde
              nulla enim similique, accusantium neque, quisquam quas molestiae doloremque magnam
              maxime rem earum. Reprehenderit iste obcaecati corrupti? Id, rem.
            </p>
          </div>

          <div className='row py-5'>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img1'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Software Developement</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img2'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Testing</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img3'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>App Developement</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img4'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>DevOps</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img5'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Marketing</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div class='flip'>
                <div class='front bg-service-img6'></div>
                <div class='back d-flex flex-column align-items-center text-center justify-content-center gap-3'>
                  <h3>Sales</h3>
                  <p>
                    Good tools make application development quicker and easier to maintain than if
                    you did everything by hand..
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

export default Services;
