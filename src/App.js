import React, { Component } from 'react';
import './App.css';
import ButtonBackground from './components/ButtonBackground'
import ButtonBorder from './components/ButtonBorder';
import ButtonName from './components/ButtonName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonBackground/>
        <ButtonBorder/>
        <ButtonName/>
      </div>
    );
  }
}

export default App;
