import React, { Component } from 'react';
import Navbar from './Navbar';
import AvatarForm from './CreateAvatarForm';

class FormPage extends Component {
    render () {
        return (
            <div className = 'navBar'>
                <Navbar />
            </div>,
            <div>
                <AvatarForm />
            </div>
        )
    } 
};

export default FormPage;