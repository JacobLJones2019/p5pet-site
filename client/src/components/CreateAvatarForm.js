import React, {Component} from 'react';

class AvatarForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            level : 0
        };

    }

    handleName = (event) => {
        this.setState({name: event.target.value});
    };

    handleLevel = (event) => {
        this.setState({level: event.target.value});
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    };


    render () {
        return (
            <div className="newAvatarForm">
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name:
                        <input type='text' placeholder= 'Name' value= {this.name} onChange= {this.handleName} />
                    </label>
                    <label>
                        Level:
                        <input type='number' value= {this.value} onChange= {this.handleLevel} />
                    </label>
                    <input type='submit' value='I am the Submit Button' />
                </form>
            </div>
        )
    }
}

export default AvatarForm;