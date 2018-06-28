import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <p className="app-intro">
          To get started, edit <code>/pages/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
