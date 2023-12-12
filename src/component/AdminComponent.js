import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AdminComponent = () => {

  const navigate = useNavigate();

  const handleAddBookClick = () => {
    navigate('/admin/add-book');
  };

  const handleAddCategoryClick = () => {
    navigate('/admin/add-category');
  };

  return (
    <Container>
      <Row>
        <Col md={6} sm={12}>
          <Button variant="primary" onClick={handleAddBookClick}>Add Book</Button>
        </Col>
        <Col md={6} sm={12}>
          <Button variant="primary" onClick={handleAddCategoryClick}>Insert Category</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminComponent;
