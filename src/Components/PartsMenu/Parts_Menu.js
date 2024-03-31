import { Link } from "react-router-dom";
import "./Parts_Menu.css"; 
function Parts_Menu() {
  return (
    <div className="parts-menu">
      <h1 className="heading">PART MENU</h1>
      <div className="menu-grid">
        <Link to="/book-in" className="menu-link">BOOK-IN</Link>
        <Link to="/move-location" className="menu-link">MOVE LOCATION</Link>
        <Link to="/consume" className="menu-link">CONSUME</Link>
        <Link to="/despatch" className="menu-link">DESPATCH</Link>
        <Link to="/quarantine" className="menu-link">QUARANTINE</Link>
        <Link to="/scrap" className="menu-link">SCRAP</Link>
      </div>
    </div>
  );
}

export default Parts_Menu;
