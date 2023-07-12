import React from "react";
import CustomNavbar from "./Components/CustomNavbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Form from "./Components/Form";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <About />
      <Services />
      <Form />
    </div>
  );
};

export default Home;
