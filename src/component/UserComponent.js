import React, { Component } from 'react';
import UserService from '../service/UserService';

class UserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    
    componentDidMount() {
        UserService.getUser().then((response) => {
            
            this.setState({user : response.data})

            console.log(this.state.user)
        });
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

export default UserComponent;