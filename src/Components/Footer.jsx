import React from "react";
import "./Footer.css";
import footerLogo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer class='footer pt-5 pb-3 border-top'>
        <div class='container'>
          <div class='row align-items-end py-5'>
            <div class='col-md-3 align-self-center text-center text-md-start'>
              <img src={footerLogo} alt='' />
            </div>
            <div class='col-md-5'>
              <div class='row py-3 py-md-5 g-4 text-center text-md-start'>
                <div class='col-md-4'>
                  <a href=''>
                    <p>About</p>
                  </a>
                </div>
                <div class='col-md-4'>
                  <a href=''>
                    <p>What We DO</p>
                  </a>
                </div>
                <div class='col-md-4'>
                  <a href=''>
                    <p>Jobs</p>
                  </a>
                </div>
              </div>
              <div class='row g-4 text-center text-md-start'>
                <div class='col-md-4'>
                  <a href=''>
                    <p>Projects</p>
                  </a>
                </div>
                <div class='col-md-4'>
                  <a href=''>
                    <p>Press</p>
                  </a>
                </div>
                <div class='col-md-4'>
                  <a href=''>
                    <p>Download</p>
                  </a>
                </div>
              </div>
            </div>
            <div class='col-md-4 pt-3 pt-md-0 text-center text-md-start'>
              <div class='row gap-4 justify-content-center justify-content-md-start'>
                <p class='fw-bold'>Join our community 🔥</p>
                <input type='text' class='form-control' placeholder='Enter your email' />
              </div>
            </div>
          </div>
          <hr />
          <div class='row text-center text-md-start'>
            <small>Copyright © 2021 UI8 LLC. All rights reserved</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
