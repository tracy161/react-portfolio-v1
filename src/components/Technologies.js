import React from 'react'
import '../assets/tech.css';
import { Container, Row, Card, Col } from 'react-bootstrap'
import techData from '../helpers/TechData'

const Technologies = () => {

  return (
    <div id='technologies' style={{background: '#202020', padding: '100px 0 70px'}}>
      <Container>
        <Row>
          <div className="techs-section-title text-center">
            <span>Some of the Technologies I use</span>
            <h2>Technologies</h2>
          </div>
        </Row>
        <Row>
          {techData.map((item, index) => {
            return (
              <Col md={3} sm={6} style={{padding: '25px 0'}}>
                <Card key={index} style={{margin: '15px', background: 'transparent' }} className='card-tech'>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Title className="card-tech-overlay">
                    <div className="tech-text">{item.icon} <br /><br /> {item.name}</div>
                  </Card.Title>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Technologies
