import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Parts_Menu.css";
// import  partsform from './Components/PartsForms';

function Parts_Menu() {
  // const navigate=useNavigate();

  return (
    <div className="parts-menu">
      <h1 className="heading">PART MENU</h1>
      <div className="menu-item">
        <Link type="button" to="/book-in" className="btn btn-primary">
          Book_In
        </Link>
        <Link type="button" to="/move-location" className="btn btn-primary">
          MOVE LOCATION
        </Link>
        <Link type="button" to="/consume" className="btn btn-primary">
          CONSUME
        </Link>
        <Link type="button" to="/despatch" className="btn btn-primary">
          DESPATCH
        </Link>
        <Link type="button" to="/quarantine" className="btn btn-primary">
          QUARANTINE
        </Link>
        <Link type="button" to="/scrap" className="btn btn-primary">
          SCRAP
        </Link>
      </div>
      <div className="form-container"></div>
    </div>
  );
}

export default Parts_Menu;
