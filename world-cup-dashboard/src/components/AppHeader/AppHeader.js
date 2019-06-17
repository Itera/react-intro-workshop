import React from 'react';
import footballLogo from '../../content/football.svg';
import './AppHeader.css';

const AppHeader = () => (
  <header className="app-header">
    <img src={footballLogo} className="app-logo" alt="logo" />
    <h1 className="app-title">Women's World Cup 2019 Dashboard</h1>
  </header>
);

export default AppHeader;
