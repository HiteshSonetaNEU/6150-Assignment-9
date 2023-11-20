import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';

const HomePage = () => {

  return (
    <>
      <NavigationBar />

      <Container className="mt-5">

        <Card className="p-4">

        <h1 className="text-center mb-4">Welcome to My Website</h1>

        <p className="text-center mb-5">This is the home page of my website. Feel free to explore and discover more about me and my work.</p>

        <Row>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Featured Project</Card.Title>
                <Card.Text>
                  Check out my latest featured project here. 
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Learn more about who I am and what I do.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Featured Content</Card.Title>
                <Card.Text>Explore my latest and featured content.</Card.Text>
                <Button variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col>
          

        </Row>
        </Card>
      </Container>

    </>
  );
}

export default HomePage;