import React, {Component} from 'react';
import Navbar from './Navbar';

class Landing extends Component {
    render () {
        return (
            <div className='navBar'>
                <Navbar />
            </div>,
            <div className ='landingPage'>
                <body>
                    <p>
                        I am the landing page body!!
                        I will eventually contain a video of a game!!!
                    </p>
                </body>
            </div>
        )
    }
}

export default Landing;