import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Dashboard from './pages/DashBoard/DashBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <Dashboard />
      </div>
    );
  }
}

export default App;
