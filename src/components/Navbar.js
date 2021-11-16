import React, { useState, useEffect } from 'react';
import '../assets/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas, Container, Card } from 'react-bootstrap';
import navigationLinks from '../helpers/NavigationLinks';

const Navigation = () => {
  const [stickybar, setStickybar] = useState(false);
  const showStickybar = () => {
    const offset = window.scrollY;
    if (offset > 299) {
      setStickybar(true);
    } else {
      setStickybar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showStickybar);
  }, [stickybar]);

  return (
    <Navbar
      variant='dark'
      expand={false}
      className={stickybar ? 'navbar fixed' : 'navbar'}
    >
      <Container fluid>
        <Navbar.Brand style={{ marginLeft: '1rem', fontSize: '25px' }} href='#'>
          Tracy's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ marginRight: '1rem' }}
          aria-controls='offcanvasNavbar'
        />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3 mt-5'>
              {navigationLinks.map((item, index) => {
                return (
                  <Card
                    key={index}
                    style={{ margin: '25px 0', background: 'transparent' }}
                    className='nav-item-hover'
                  >
                    <Nav.Link href={item.ref}>
                      <Card.Img variant='top' src={item.img} />
                      <Card.Title className='nav-overlay'>
                        <div className='nav-text'>{item.name}</div>
                      </Card.Title>
                    </Nav.Link>
                  </Card>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
