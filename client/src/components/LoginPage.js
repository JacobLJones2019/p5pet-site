import React, { Component } from 'react';
import LoginForm from './LoginForm';


class LoginPage extends Component {
    render () {
        return (
            <div className ='loginPage'>
                <p>
                    I am the Login Page!
                </p>
                < LoginForm />
            </div>
        )
    }
}

export default LoginPage;