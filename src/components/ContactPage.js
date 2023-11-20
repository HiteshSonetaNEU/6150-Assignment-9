import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const ContactPage = () => {

  return (
    <>
    <NavigationBar />

      <Container className="mt-5">
        <Card className="p-4">

        <h1 className="text-center mb-4">Contact Us</h1>

        <Row>

          <Col md={6}>

            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact Form</Card.Title>
                
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  
                  <Button  className="mt-2"variant="primary" type="submit">
                    Submit
                  </Button>

                </Form>
              </Card.Body>
            </Card>

          </Col>  


        </Row>
        </Card>
      </Container>

    </>
  );

}

export default ContactPage;