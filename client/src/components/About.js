import React, {Component} from 'react';
import NavBar from '../components/Navbar';

class About extends Component {
    render () {
        return (
            <div className ='navBar'>
                < NavBar />
            </div>,
            <div className= "about"> 
                <div>
                    <p>
                        About me
                    </p>
                </div>
            </div>
        )
    }
}

export default About;