import React from "react";
import CustomNavbar from "./Components/CustomNavbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import About from "./Components/About";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Intro />
      <Services />
      <About />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
