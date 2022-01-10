import React, { useState } from 'react';
import '../assets/portfolio.css';
import { Container, Row, Card, Col, Image, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Projects from '../helpers/ProjectsData';
import * as ImIcons from 'react-icons/im';

const Portfolio = () => {
  const [items, setItems] = useState(Projects);

  const [modalShow, setMoDalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  const filtered = techItem => {
    const updateItems = Projects.filter(
      currentItem => currentItem.tech === techItem
    );
    return setItems(updateItems);
  };

  const createModal = data => {
    return (
      <Modal
        show={modalShow}
        onHide={() => setMoDalShow(false)}
        size='lg'
        arial-labelledby='contained-modal-title-vcenter'
        centered
        className='portfolio-modal'
      >
        <Modal.Header id='contained-modal-title-vcenter'>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.des}</p>
          <Image src={data.img} style={{ width: '300px', margin: 'auto' }} />
        </Modal.Body>
        <a
          id='portfolio-modal-link'
          href={data.link}
          target='_blank'
          rel='noreferrer'
        >
          Go to site
        </a>
        <Modal.Footer>
          <p style={{ marginRight: 'auto' }}>Technologies used: {data.tech}</p>
          <Button
            style={{ background: '#333' }}
            onClick={() => setMoDalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div id='portfolio' style={{ padding: '100px 0 70px' }}>
      <Container>
        <Row>
          <div className='portfolio-section-title text-center'>
            <span>Portfolio</span>
            <h2>Work I Have Done</h2>
          </div>
        </Row>
        <Row>
          <div className='portfolio-section-filters text-center'>
            <ul>
              <li>
                <a href='#!' onClick={() => setItems(Projects)}>
                  All
                </a>
              </li>
              <li>
                <a href='#!' onClick={() => filtered('Full Stack')}>
                  Full Stack
                </a>
              </li>
              <li>
                <a href='#!' onClick={() => filtered('React.JS')}>
                  React.JS
                </a>
              </li>
              <li>
                <a href='#!' onClick={() => filtered('JavaScript')}>
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
        </Row>

        <Row className='portfolio-row'>
          {items.map((item, index) => {
            return (
              <Col md={4} style={{ padding: '25px 0' }}>
                <Card
                  key={index}
                  style={{ margin: '15px', background: 'transparent' }}
                  className='portfolio-card'
                >
                  <Card.Img
                    variant='top'
                    src={item.img}
                    style={{ opacity: '0.5' }}
                  />
                  <Card.Title className='portfolio-tech-overlay'>
                    <div
                      className='portfolio-text'
                      onClick={() => {
                        setTempData({
                          img: item.img,
                          link: item.link,
                          des: item.des,
                          title: item.title,
                          tech: item.tech,
                        });
                        setMoDalShow(true);
                      }}
                    >
                      <ImIcons.ImPlus />
                    </div>
                    {createModal(tempData)}
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

export default Portfolio;
