import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/Navigation';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

export default App;
