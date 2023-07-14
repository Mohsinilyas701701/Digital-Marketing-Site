import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "./Hero.scss";
import Hero1 from "../../../assets/hero1.jpg";
import Hero2 from "../../../assets/hero2.jpg";
import Hero3 from "../../../assets/hero3.svg";
import Hero4 from "../../../assets/hero4.jpg";

const Hero = () => {
  return (
    <>
      <Swiper className='mySwiper' navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <img src={Hero1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hero4} alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
