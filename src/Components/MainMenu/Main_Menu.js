import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main_Menu.css'; 

const Main_Menu = () => {
  const navigate = useNavigate();

  const redirectToMain = () => {
    let path = '/Main_Menu';
    navigate(path);
  }

  return (
    <div className="main-menu">
      <h1 onClick={redirectToMain}>MAIN MENU</h1>
      <div className="menu-items">
        <Link type="button" to="/Battery_Menu" className="btn btn-primary main-btn">BATTERY</Link>
        <Link type="button" to="/Parts_Menu" className="btn btn-primary main-btn">PART</Link>
        <Link type="button" to="/ReplacementOrder" className="btn btn-primary main-btn">REPLACEMENT WORKS ORDER</Link>
      </div>
    </div>
  );
};

export default Main_Menu;


