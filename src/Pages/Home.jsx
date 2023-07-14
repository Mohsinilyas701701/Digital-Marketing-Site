import React from "react";
import CustomNavbar from "../Components/Home/CustomNavbar/CustomNavbar";
import Hero from "../Components/Home/Hero/Hero";
import Intro from "../Components/Home/Intro/Intro";
import About from "../Components/Home/About/About";
import Form from "../Components/Home/Form/Form";
import Footer from "../Components/Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Intro />
      <About />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
