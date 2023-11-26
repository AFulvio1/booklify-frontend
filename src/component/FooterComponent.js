import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = () => {
  return (
    <footer className="bg-primary text-white p-4">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h5>Booklify ORG</h5>
            <p>2023 - All rights reserved</p>
          </Col>
          <Col md={6} sm={12}>
            <h5>Contact Us</h5>
            <p>Email: info@booklify.org</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
