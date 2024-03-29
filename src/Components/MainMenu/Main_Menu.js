import React from 'react';
import { Link } from 'react-router-dom';
import './Main_Menu.css'; 

const Main_Menu = () => {
  return (
    <div className="main-menu">
      <h1>MAIN MENU</h1>
      <div className="menu-items">
        <Link to="/Battery_Menu" className="menu-item">BATTERY</Link>
        <Link to="/Parts_Menu" className="menu-item">PART</Link>
        <Link to="/ReplacementOrder" className="menu-item">REPLACEMENT WORKS ORDER</Link>
      </div>
    </div>
  );
};

export default Main_Menu;


