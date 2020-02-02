import React, { Component } from 'react';
import Navbar from '../src/components/Navbar';
import Landing from '../src/components/Landing';
import About from '../src/components/About';
import FormPage from '../src/components/FormPage';



class App extends Component {

// Potentially global state of logged in? 

  render (){

  return (
      <div className="App">
        <div className ='navBar'>
          <Navbar />
        </div>
        <Landing />
        <About />
        <FormPage />
      </div>
    );
  }
}

export default App;
