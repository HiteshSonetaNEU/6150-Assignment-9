import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import NavigationBar from './NavigationBar';

const jobs = [
  {id: 1, title: "Software Engineer", description:"Coding job"},
  {id: 2, title: "Marketing Manager", description:"Marketing job"},
  
  {id: 1, title: "Software Engineer", description:"Coding job"},
  {id: 2, title: "Marketing Manager", description:"Marketing job"},
  
  {id: 1, title: "Software Engineer", description:"Coding job"},
  {id: 2, title: "Marketing Manager", description:"Marketing job"},
  
  {id: 1, title: "Software Engineer", description:"Coding job"},
  {id: 2, title: "Marketing Manager", description:"Marketing job"},
];

const JobsPage = () => {

  return (
    <>
    <NavigationBar />
    
      <Container className="mt-5 mb-5">

        <Card className="p-4">

        <h1 className="text-center mb-4">Jobs</h1>

        <Form className="mb-4">
          <Form.Control placeholder="Search jobs"/>
        </Form>

        <Row xs={1} sm={2} lg={3} className="g-3">
        
          {jobs.map(job => (
            <Col key={job.id}>
              <Card className="job-card">
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>{job.description}</Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
        </Card>
      </Container>

    </>
  );

}

export default JobsPage;