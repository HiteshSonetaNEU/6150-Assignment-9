import React from 'react';
import { Container, Card,Col,Row,Button } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

const AboutUsPage = () => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Card className="p-4">
        <h1 className="text-center mb-5">About Our Company</h1>

<Row>

  <Col md={6}>
    <Card className="about-card mb-4">
      <Card.Body>
        <Card.Title>Our Team</Card.Title>
        <Card.Text>
          Meet the talented people behind our company.
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col md={6}>
    <Card className="about-card mb-4">
      <Card.Body>
        <Card.Title>Our Mission</Card.Title>
        <Card.Text>Our company mission statement.</Card.Text>
      </Card.Body>
    </Card>
  </Col>

</Row>

<Row>

  <Col md={6}>
    <Card className="about-card">
      <Card.Body>
        <Card.Title>Our Values</Card.Title>
        <Card.Text>Our core company values.</Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={6}>
    <Card className="about-card">
      <Card.Body>
        <Card.Title>Our History</Card.Title>
        <Card.Text>Learn how our company was founded.</Card.Text>  
      </Card.Body>
    </Card>
  </Col>

</Row>
        </Card>
      </Container>
    </>
  );
};

export default AboutUsPage;
