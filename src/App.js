import React, { Component } from 'react';
import Paginations from './components/pagination';
import './App.css';
import UnitTest from './components/unitTest';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Paginations />
        <UnitTest />

      </div>
    );
  }
}

export default App;
