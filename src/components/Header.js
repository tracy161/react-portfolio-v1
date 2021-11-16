import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import '../assets/header.css';
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div id='home'>
      <Container>
        <div className='main-info'>
          <h4>Hello! I am Tracy</h4>
          <br />
          <Typed className='stringtyped'
            strings={[
              'An Interactive Developer',
              'Also known as a',
              'Front-end Developer',
              'UX/UI Designer',
              'based in Melbourne, Australia',
              '',
              '']}
              typeSpeed={40}
              backSpeed={50}
              loop >
          </Typed>
          <br />
          <div>
          <a href='#contact'><Button variant="outline-light" size="lg">Contact Me</Button></a>  
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
