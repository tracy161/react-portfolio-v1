import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import person from '../assets/images/person.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../assets/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CV from '../assets/files/tracyCV2022.pdf';

AOS.init();

const About = () => {
  return (
    <div id='about'>
      <Container>
        <Row className='about-section'>
          <Col
            md={6}
            className='about-col'
            data-aos='fade-right'
            data-aos-offset='100'
            data-aos-delay='20'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
            data-aos-anchor-placement='top-center'
          >
            <div className='about-content'>
              <div className='about-site-title'>
                <span>Expert Web Developer &amp; Designer</span>
                <h2>About Me</h2>
              </div>
              <p>
                I am an accomplished and highly skilled Full Stack Developer
                with the willingness to go beyond the standard work commitments
                in designing, developing web applications and technology
                solutions that provide exceptional user interfaces which are
                scalable and integrate easily with existing systems. My goal is
                to become an IT professional in a company, where I can enjoy
                working and contribute to achieving business goals.
              </p>
              <div className='about-site-progress'>
                <h3>What is my skill level?</h3>
                <br />
                <Row>
                  <Col md={6}>
                    <span>React</span>
                    <ProgressBar animated now={70} />
                    <span>JavaScript</span>
                    <ProgressBar animated now={75} />
                    <span>Redux.JS</span>
                    <ProgressBar animated now={65} />
                  </Col>
                  <Col md={6}>
                    <span>Node.JS</span>
                    <ProgressBar animated now={65} />
                    <span>HTML5/CSS3</span>
                    <ProgressBar animated now={80} />
                    <span>Bootstrap/Materialize</span>
                    <ProgressBar animated now={75} />
                  </Col>
                </Row>
              </div>
              <a href={CV} download>
                <Button variant='outline-light' size='lg' className='about-btn'>
                  Download Resume
                </Button>
              </a>
            </div>
          </Col>
          <Col md={5}>
            <div
              className='about-img'
              data-aos='fade-left'
              data-aos-offset='100'
              data-aos-delay='20'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
              data-aos-anchor-placement='top-center'
            >
              <img src={person} alt='person-icon' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
