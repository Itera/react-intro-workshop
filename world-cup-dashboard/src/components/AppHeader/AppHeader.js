import React from 'react';
import logo from '../../content/logo.svg';
import './AppHeader.css';

const AppHeader = () => (
  <header className="app-header">
    <img src={logo} className="app-logo" alt="logo" />
    <h1 className="app-title">Welcome to React</h1>
  </header>
);

export default AppHeader;
