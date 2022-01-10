import React from 'react';
import '../assets/tech.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Card, Col } from 'react-bootstrap';
import techData from '../helpers/TechData';

AOS.init();

const Technologies = () => {
  return (
    <div
      id='technologies'
      style={{ background: '#202020', padding: '100px 0 70px' }}
    >
      <Container>
        <Row>
          <div className='techs-section-title text-center'>
            <span>Some of the Technologies I use</span>
            <h2>Technologies</h2>
          </div>
        </Row>
        <Row>
          {techData.map((item, index) => {
            return (
              <Col md={3} sm={6} style={{ padding: '25px 0' }}>
                <Card
                  key={item.id}
                  style={{ margin: '15px', background: 'transparent' }}
                  className='card-tech'
                  data-aos='fade-up'
                  data-aos-offset='100'
                  data-aos-delay='20'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  data-aos-mirror='true'
                  data-aos-once='false'
                  data-aos-anchor-placement='top-center'
                >
                  <Card.Img variant='top' src={item.img} />
                  <Card.Title className='card-tech-overlay'>
                    <div className='tech-text'>
                      {item.icon} <br />
                      <br /> {item.name}
                    </div>
                  </Card.Title>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
