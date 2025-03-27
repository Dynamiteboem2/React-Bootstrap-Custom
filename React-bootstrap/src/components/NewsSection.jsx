import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function NewsSection() {
  return (
    <>
      <Row className="g-3">
        <Col md={4}>
          <Card>
            <div className="placeholder" style={{ height: '250px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '250px' }}>600 x 400</div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <div className="placeholder" style={{ height: '250px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '250px' }}>600 x 400</div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <div className="placeholder" style={{ height: '250px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '250px' }}>600 x 400</div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <div className="placeholder" style={{ height: '150px', backgroundColor: '#ddd', textAlign: 'center', lineHeight: '150px' }}>600 x 150</div>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewsSection;
