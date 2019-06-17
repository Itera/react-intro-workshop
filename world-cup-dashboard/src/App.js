import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Dashboard from './pages/DashBoard/DashBoard';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Dashboard />
    </div>
  );
}

export default App;
