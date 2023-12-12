import React, { Component } from 'react';
import BookService from '../../service/BookService';

class CategoryCardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: {}
        }
    }
    
    componentDidMount() {
        fetch(BookService.getCategory())
            .then((response) => response.json())
            .then((data) => {
                this.setState({category : data});
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    render() {
        return (
            <div>
                <div className='card offset-md-3 col-md-6'>
                    <h3 className='text-center card-header'>View category Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong>Category Name: </strong> {this.state.category.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryCardComponent;