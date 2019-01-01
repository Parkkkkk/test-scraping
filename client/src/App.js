import React, { Component } from 'react';
import './App.css';
import Login from '../src/component/login';
import Item from '../src/component/item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="item"><Item /></div>
        <div className="login"><Login /></div>
      </div>
    );
  }
}

export default App;
