import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import BookService from '../../service/BookService';

class CategoryTableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
    
  componentDidMount() {
    fetch(BookService.getAllCategories())
      .then((response) => response.json())
      .then((data) => {
        this.setState({categories : data});
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
};

export default CategoryTableComponent;