import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <Swiper className='mySwiper' modules={[Autoplay]} speed={300} autoplay={true}>
        <SwiperSlide>
          <div className='slide1'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1>
                  Let's Talk <br /> <span className='display-1 fw-bolder'>Ideas</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium iste
                  totam labore libero ipsum velit odio quaerat nemo adipisci?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide2'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1 className=''>
                  Let's Talk <br /> <span className='display-1 fw-bolder'>Ideas</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium iste
                  totam labore libero ipsum velit odio quaerat nemo adipisci?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide3'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1 className=''>
                  Let's Talk <br /> <span className='display-1 fw-bolder'>Ideas</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium iste
                  totam labore libero ipsum velit odio quaerat nemo adipisci?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='slide4'>
            <div className='overlay'>
              <div className='overlay_content'>
                <h1 className=''>
                  Let's Talk <br /> <span className='display-1 fw-bolder'>Ideas</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium iste
                  totam labore libero ipsum velit odio quaerat nemo adipisci?
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
