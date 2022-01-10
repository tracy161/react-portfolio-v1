import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import person from '../assets/images/person.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

import '../assets/about.css';

const About = () => {
  return (
    <div id='about'>
      <Container>
        <Row className='about-section'>
          <Col md={6} className='about-col'>
            <div className='about-content'>
              <div className='about-site-title'>
                <span>Expert Web Developer &amp; Designer</span>
                <h2>About Me</h2>
              </div>
              <p>
                There isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary you need to be sure
              </p>
              <div className='about-site-progress'>
                <h3>What is my skill level?</h3>
                <br />
                <Row>
                  <Col md={6}>
                    <span>React</span>
                    <ProgressBar animated now={70} />
                    <span>JavaScript</span>
                    <ProgressBar animated now={5} />
                    <span>Redux.JS</span>
                    <ProgressBar animated now={5} />
                  </Col>
                  <Col md={6}>
                    <span>Node.JS</span>
                    <ProgressBar animated now={5} />
                    <span>HTML5/CSS3</span>
                    <ProgressBar animated now={5} />
                    <span>Bootstrap/Materialize</span>
                    <ProgressBar animated now={5} />
                  </Col>
                </Row>
              </div>
              <Button variant='outline-light' size='lg' className='about-btn'>
                Download Resume
              </Button>
            </div>
          </Col>
          <Col md={5}>
            <div className='about-img'>
              <img src={person} alt='person-icon' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
