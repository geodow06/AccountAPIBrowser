import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MainRouter from './MainRouter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainRouter/>
        </header>
      </div>
    );
  }
}

export default App;
