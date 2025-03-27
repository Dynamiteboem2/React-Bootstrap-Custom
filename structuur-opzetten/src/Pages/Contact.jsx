import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <header className="d-flex justify-content-between py-3 border-bottom">
        <h3>🌎 Global News Wire</h3>
        <nav>
          <a href="/home" className="mx-2">Home</a>
          <a href="/contact" className="mx-2">Contact</a>
        </nav>
      </header>

      <h2 className="mt-4">Get in Touch</h2>
      <p>
        Welcome to Global News Wire’s contact page! We value your feedback and inquiries.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col md={6} className="contact-info">
          <h5>Headquarters</h5>
          <p>Global News Wire<br />123 Main Street, New York, NY 10001</p>
          <p>Email: <a href="mailto:info@globalnewswire.com">info@globalnewswire.com</a></p>
          <p>Phone: +1 (555) 555-5555</p>

          <h5>For Media Inquiries:</h5>
          <p>Email: <a href="mailto:press@globalnewswire.com">press@globalnewswire.com</a></p>
          <p>Phone: +1 (555) 555-1234</p>

          <h5>For Advertising:</h5>
          <p>Email: <a href="mailto:ads@globalnewswire.com">ads@globalnewswire.com</a></p>
          <p>Phone: +1 (555) 555-5678</p>
        </Col>
      </Row>

      <footer className="text-center py-3 border-top">© Global News Wire | All rights reserved.</footer>
    </Container>
  );
};

export default Contact;
