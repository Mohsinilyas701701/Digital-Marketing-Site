import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer class='site-footer'>
        <div class='container'>
          <div class='row justify-content-between'>
            <div class='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p class='text-justify'>
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming
                programmers with the code. Scanfcode focuses on providing the most efficient code or
                snippets as the code wants to be simple. We will help programmers build up concepts
                in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap,
                JavaScript, PHP, Android, SQL and Algorithm.
              </p>
            </div>
            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <Nav className='d-flex flex-column'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#services'>Services</Nav.Link>
                <Nav.Link href='#aboutus'>About Us</Nav.Link>
                <Nav.Link href='#gallery'>Gallery</Nav.Link>
                <Nav.Link href='#form'>Contact Us</Nav.Link>
              </Nav>
            </div>
          </div>
          <hr />
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright &copy; 2017 All Rights Reserved by
                <a href='#'>Scanfcode</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
