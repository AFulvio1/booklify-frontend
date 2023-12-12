import React, { Component } from 'react';
import UserService from '../../service/UserService';

class UserCardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    
    componentDidMount() {
        fetch(UserService.getUser())
            .then((response) => response.json())
            .then((data) => {
                this.setState({user : data});
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    render() {
        return (
            <div>
                <div className='card offset-md-3 col-md-6'>
                    <h3 className='text-center card-header'>View Users Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <p><strong>User First Name: </strong> {this.state.user.firstname}</p>
                        </div>
                        <div className='row'>
                            <p><strong>User Last Name: </strong> {this.state.user.lastname}</p>
                        </div>
                        <div className='row'>
                            <p><strong>User Email: </strong> {this.state.user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCardComponent;