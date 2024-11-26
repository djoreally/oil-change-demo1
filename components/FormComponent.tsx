"use client";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function FormComponent() {
  return (
    <>
    <div id='order' className='bg-gray-100'>
        <Container>
        <div className="wrap-template">
        <h2 className='wrap-template__title'>Book Your Appointment</h2>
          <Row>
                <Form noValidate 
            action="https://formspree.io/f/mwpeedjj"
              method="POST">
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                      <Form.Label htmlFor="city1">From:</Form.Label>
                      <Form.Control type="text" placeholder="Moscow" required name="city1" id='city1'/>
                      <Form.Control.Feedback type="invalid">
                        Please enter the location name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                      <Form.Label htmlFor="city2">To:</Form.Label>
                      <Form.Control type="text" placeholder="Kazan" required name="city2" id='city2'/>
                      <Form.Control.Feedback type="invalid">
                        Please enter the location name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Row>
                    <Row className="mb-3">
                    <Form.Group as={Col} md="12" >
                      <Form.Label htmlFor="phone">Contact Phone:</Form.Label>
                      <Form.Control type="text" placeholder="+79991234567" required name="phone" id='phone'/>
                      <Form.Control.Feedback type="invalid">
                        Please enter your phone number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <p style={{ fontSize: "12px", marginBottom: "10px"}}>* By clicking submit, you agree to the privacy policy</p>
                  <div className="d-grid gap-2">
                  <Button type="submit" size='lg' className='form__button'>Place an Order</Button>
                  </div>
                </Form>
                </Row>
          </div>
          </Container>
          </div>
    </>
  );
}