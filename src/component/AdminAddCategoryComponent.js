import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import BookService from '../service/BookService';

const AdminAddCategoryComponent = () => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const [alertMessage, setAlertMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(BookService.addCategory(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('HTTP request failed');
      }

      const responseData = await response.json();
      console.log('HTTP request successful:', responseData);
      setAlertMessage({ type: 'success', text: 'Operation processed correctly.' });

    } catch (error) {
      console.error('HTTP request failed:', error);
      setAlertMessage({ type: 'danger', text: 'Operation failed. Please try again.' });
    }
  };

  return (
    <div>
      {alertMessage && <Alert variant={alertMessage.type}>{alertMessage.text}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Category name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminAddCategoryComponent;
