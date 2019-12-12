import React, { Component } from "react";
import "./App.css";
import smurf from '/Users/zbigniew/Documents/gitHub/42._Sprint_VIII_Advanced-State-Management_Smurfs/Version2/Sprint-Challenge-State-Management-Smurfs/smurfs/src/smurf.png'

import Smurfs from './smurfs';
import Form from './form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <img src={smurf} className="App-logo" alt="logo" />
        
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
        <Form />
      </div>
    );
  }
}

export default App;
