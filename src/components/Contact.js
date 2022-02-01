import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import '../assets/contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Result = () => {
  return (
    <p style={{color: 'green'}}>Your Message has been successfully sent. I will contact you soon</p>
  );
};

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [result, setResult] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs
        .sendForm(
          'service_portfolio_1',
          'template_qx4ui6c',
          e.target,
          'user_ZlF2Cn2b583C4kl8gclfR'
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
      setResult(true);
    }
    setValidated(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div
      id='contact'
      style={{ background: '#202020', padding: '100px 0 70px' }}
    >
      <Container>
        <Row className='pb-4'>
          <Col md={5}>
            <div className='contact-page-item'>
              <h2 className='mb-4'>My Contacts</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <div className='adress mb-4'>
                <h3>Address</h3>
                <span>245 King Street, Touterie Victoria 8520 Australia</span>
              </div>
              <div className='phone mb-4'>
                <h3>Phone</h3>
                <span>0-123-456-7890</span>
                <span>0-123-456-7890</span>
              </div>
              <div className='email mb-4'>
                <h3>Email</h3>
                <span>sample@gmail.com</span>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <Form
              noValidate
              validated={validated}
              onSubmit={onSubmit}
              className='contact-page-item'
            >
              <Row className='mb-4'>
                <Form.Group as={Col} controlId='formGridName'>
                  <Form.Control
                    type='text'
                    name='name'
                    style={{ height: '50px' }}
                    placeholder='Your Name'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridEmail'>
                  <Form.Control
                    type='email'
                    name='email'
                    style={{ height: '50px' }}
                    placeholder='Your Email'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter your valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className='mb-4'>
                <Form.Group as={Col} controlId='formGridPhone'>
                  <Form.Control
                    type='text'
                    name='phone'
                    style={{ height: '50px' }}
                    placeholder='Your Phone'
                    required
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter your valid phone number.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId='formGridAddress'>
                  <Form.Control
                    type='text'
                    name='address'
                    style={{ height: '50px' }}
                    placeholder='Your Address'
                  />
                </Form.Group>
              </Row>

              <Row className='mb-5'>
                <Form.Group as={Col} controlId='formGridComment'>
                  <Form.Control
                    as='textarea'
                    name='message'
                    type='text'
                    style={{ height: '150px' }}
                    placeholder='Your Message...'
                  />
                </Form.Group>
              </Row>

              <Button
                variant='outline-light'
                size='lg'
                type='submit'
                className='contact-btn'
              >
                Submit
              </Button>
              <Row className='mt-3'>{result ? <Result /> : null}</Row>
            </Form>
          </Col>
        </Row>
        <hr />
        <div className='contact-copyright'>
          <h1>Tracy's Portfolio</h1>
          <span>Copyright-{new Date().getFullYear()}</span>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
