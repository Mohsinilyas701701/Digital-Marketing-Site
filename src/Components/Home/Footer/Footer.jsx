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
              <h6>Company Intro</h6>
              <p class='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis magni impedit
                harum neque temporibus! Non saepe, nam voluptatum magni tenetur mollitia corporis
                repellat cumque reiciendis necessitatibus facere ducimus suscipit quasi. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Qui error temporibus quis eius laborum
                reprehenderit non nobis, harum ducimus? Placeat.
              </p>
            </div>
            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <Nav className='d-flex flex-column'>
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
