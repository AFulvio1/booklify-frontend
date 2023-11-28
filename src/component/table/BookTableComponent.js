import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import BookService from '../../service/BookService';

class BookTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }
    
    componentDidMount() {
        fetch(BookService.getAllBooks())
            .then((response) => response.json())
            .then((data) => {
                this.setState({books : data});
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

  render() {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Subtitle</th>
              <th>Volume</th>
              <th>Year</th>
              <th>Publishing House</th>
              <th>Place</th>
              <th>ISBN</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => (
              <tr key={book.id}>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.subtitle}</td>
                <td>{book.volume}</td>
                <td>{book.yearOfPublication}</td>
                <td>{book.publishingHouse}</td>
                <td>{book.placeOfPublication}</td>
                <td>{book.isbn}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
  }
};

export default BookTableComponent;