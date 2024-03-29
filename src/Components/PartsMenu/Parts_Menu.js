import React from 'react';
import { Link } from 'react-router-dom';
import './Parts_Menu.css'; 


function Parts_Menu() {
  return (
    
    <div className="parts-menu">
      <h1 className='heading'>Parts</h1>
      <div className="menu-item">
        <Link to="/book-in" className="menu-link">BOOK-IN</Link>
      </div>
      <div className="menu-item">
        <Link to="/move-location" className="menu-link">MOVE LOCATION</Link>
      </div>
      <div className="menu-item">
        <Link to="/consume" className="menu-link">CONSUME</Link>
      </div>
      <div className="menu-item">
        <Link to="/despatch" className="menu-link">DESPATCH</Link>
      </div>
      <div className="menu-item">
        <Link to="/quarantine" className="menu-link">QUARANTINE</Link>
      </div>
      <div className="menu-item">
        <Link to="/scrap" className="menu-link">SCRAP</Link>
      </div>
    </div>
  );
}

export default Parts_Menu;

