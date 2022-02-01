import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import '../assets/header.css';
import Button from 'react-bootstrap/Button';
import { TiSocialLinkedin } from 'react-icons/ti';
import { SiGmail } from 'react-icons/si';

const Header = () => {
  return (
    <div id='home'>
      <Container>
        <div className='main-info'>
          <h4>Hello! I am Tracy</h4>
          <br />
          <Typed
            className='stringtyped'
            strings={[
              'A Full-Stack Developer',
              'Also known as a',
              'React Front-end Developer',
              'UX/UI Designer',
              'based in Melbourne, Australia',
              '',
              '',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
          <br />
          <div>
            <a href='#contact'>
              <Button variant='outline-light' size='lg'>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </Container>
      <div className='copy'>
        <p>React Front-end Developer</p>
      </div>
      <div className='social-links'>
        <ul>
          <li>
            <a href='#!'>
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a href='#!'>
              <SiGmail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
