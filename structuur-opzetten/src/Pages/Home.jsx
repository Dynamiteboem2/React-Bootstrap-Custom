import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <header className="d-flex justify-content-between py-3 border-bottom">
        <h3>🌎 Global News Wire</h3>
        <nav>
          <a href="/home" className="mx-2">Home</a>
          <a href="/contact" className="mx-2">Contact</a>
        </nav>
      </header>

      <Row className="mt-4">
        <Col md={8}>
          <Card className="mb-4">
            <Card.Img src="/pics/homepage.png" alt="Solar Panels" />
            <Card.Body>
              <Card.Title>Breakthrough in Renewable Energy: Solar Panels Now 50% More Efficient!</Card.Title>
              <Card.Text>
                Scientists at the forefront of renewable energy research have announced a groundbreaking advancement in solar panel technology.
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
          <Row>
            <Col md={6}>
              <Card>
                <Card.Img src="/pics/robot.png" alt="AI Robots" />
                <Card.Body>
                  <Card.Title>Researchers Develop Self-Learning Robots Capable of Human-like Adaptation</Card.Title>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Img src="/pics/mars.png" alt="Mars Colony" />
                <Card.Body>
                  <Card.Title>Astronauts Successfully Establish Permanent Colony on Mars</Card.Title>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h5>Catch up on the latest global news</h5>
          <ul>
            <li>Global Health Crisis: New Pandemic Strain Emerges</li>
            <li>Tech Industry Giants Face Antitrust Probe</li>
            <li>LIVE: Electric Flying Cars Set to Take Over</li>
          </ul>
          <h5>Trending articles</h5>
          <ul>
            <li>Gene Therapy Offers Hope for Incurable Diseases</li>
            <li>Emerging Cybersecurity Threats in 2025</li>
            <li>Submersible Mission Uncovers Hidden Ecosystems</li>
          </ul>
        </Col>
      </Row>
      <footer className="text-center py-3 border-top">© Global News Wire | All rights reserved.</footer>
    </Container>
  );
};

export default Home;
