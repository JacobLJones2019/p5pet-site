import React, { Component } from 'react';
import Landing from '../src/components/Landing';
import About from '../src/components/About';



class App extends Component {

  componentDidMount (){
    this.callApi();
  }

  callApi = async () => {
    const response = await fetch('/api/user/read');
    const body = await response.json();

    console.log(body);
    return body;

  }
  render (){

  return (
      <div className="App">
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
