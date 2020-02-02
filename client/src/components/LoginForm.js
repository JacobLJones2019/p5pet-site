import React, { Component } from 'react';


class LoginForm extends Component {
    render () {
        return (
            <div className ='loginForm'>
                <form>
                    <label>
                        Username: 
                        <input type= "text" placeholder=" Username " />
                    </label>
                    <label>
                        Password:
                        <input type= "text" placeholder= "Password" />
                    </label>
                    <input type="submit" value= "Login" />
                </form>
            </div>
        )
    }
}

export default LoginForm;