import React, { Component } from 'react';
import BookService from '../../service/BookService';

class BookCardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            book: {}
        }
    }
    
    componentDidMount() {
        fetch(BookService.getBook())
            .then((response) => response.json())
            .then((data) => {
                this.setState({book : data});
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    render() {
        return (
            <div>
                <div className='card offset-md-3 col-md-6'>
                    <h3 className='text-center card-header'>View Books Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong>Book Title: </strong> {this.state.book.title}</p>
                        </div>
                        <div className='row'>
                            <p><strong>Book Author: </strong> {this.state.book.author}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCardComponent;