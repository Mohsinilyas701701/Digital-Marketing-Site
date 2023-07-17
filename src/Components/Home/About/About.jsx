import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.scss";
import aboutImg from "../../../assets/hero.png";

const About = () => {
  return (
    <>
      <div className='about_us'>
        <Container>
          <Row
            className='align-items-center justify-content-center px-2'
            data-aos='fade-in'
            data-aos-delay='1000'
            data-aos-easing='ease-in-out'
            data-aos-duration='1500'
          >
            <Col lg={7} className='px-5'>
              <Row className='about_us_wrapper'>
                <h2>
                  We Deliver <strong>Results</strong>
                </h2>
                <span className='sub-heading'>
                  <strong>
                    With good taste and great technology we Craft Award Winning Websites.
                  </strong>
                </span>
                <p>
                  These are what determine whether or not your customer has a reaction to what
                  you’re offering. Element 8 as digital agency creatively plans out a surprising
                  brand design that makes customers notice your company and inspires them to take
                  action.
                </p>
              </Row>
            </Col>

            <Col lg={5}>
              <img src={aboutImg} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
