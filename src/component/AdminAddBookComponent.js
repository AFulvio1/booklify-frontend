import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import BookService from '../service/BookService';

const AdminAddBookComponent = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: 'male',
        subscribe: false,
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
        const response = await fetch(BookService.addBook(), {
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
            <Form.Group controlId="formAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formTitle">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formSubtitle">
                <Form.Label>Subtitle:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formVolume">
                <Form.Label>Volume:</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter book's volum number"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formYearOfPublication">
                <Form.Label>Year of publication:</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter book's year of publication"
                    name="yearOfPublication"
                    value={formData.yearOfPublication}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formPublishingHouse">
                <Form.Label>Publishing House:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's publishing house"
                    name="publishingHouse"
                    value={formData.publishingHouse}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formPlaceOfPublication">
                <Form.Label>Place of publication:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's place of publication"
                    name="placeOfPublication"
                    value={formData.placeOfPublication}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Form.Group controlId="formIsbn">
                <Form.Label>ISBN:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter book's ISBN"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleChange}
                />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  );
};

export default AdminAddBookComponent;
