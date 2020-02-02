import React, {Component} from 'react';
import Navbar from './Navbar';
import AvatarForm from './CreateAvatarForm';

class Landing extends Component {
    render () {
        return (
        <div className="mainContainer">
            <div className='navBar'> <Navbar/> </div>
            <div className='avatarForm'> <AvatarForm/> </div>
        </div>
        )
    }
}

export default Landing;