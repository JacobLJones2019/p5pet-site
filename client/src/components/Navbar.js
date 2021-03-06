import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render () {
        return (
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to ='/login'> Login </Link>
                </li>
                <li>
                    <Link to ='/createAvatar'> Create Avatar </Link>
                </li>
                <li>
                    <Link to = '/about'> About </Link>
                </li>
            </ul>
        )
    }
}

export default Navbar;