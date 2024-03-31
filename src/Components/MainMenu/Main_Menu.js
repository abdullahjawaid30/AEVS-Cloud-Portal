import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainMenu.css";

const Main_Menu = () => {
  const [showMain, setShowMain] = useState(true);

  const handleSubmit = () => {
    setShowMain(false);
  };

  const navigate = useNavigate();

  const redirectToMain = () => {
    setShowMain(true);
    let path = "/Main_Menu";
    navigate(path);
  };

  const handleLinkClick = () => {
    setShowMain(false);
  };

  return (
    <div className="main-menu">
      <h1 onClick={redirectToMain}>MAIN MENU</h1>
      {showMain && (
        <div className="menu-items">
          <Link
            type="button"
            to="/Battery_Menu"
            className="btn btn-primary main-btn"
            onClick={handleLinkClick}
          >
            BATTERY
          </Link>
          <Link
            type="button"
            to="/Parts_Menu"
            className="btn btn-primary main-btn"
            onClick={handleLinkClick}
          >
            PART
          </Link>
          <Link
            type="button"
            to="/ReplacementOrder"
            className="btn btn-primary main-btn"
            onClick={handleLinkClick}
          >
            REPLACEMENT WORKS ORDER
          </Link>
        </div>
      )}
    </div>
  );
};

export default Main_Menu;
