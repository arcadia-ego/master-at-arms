import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/navbar'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
