import React from "react";
import "./Header.css"

function Header(props) {
  return (
    <nav>
        <ul className="navbar-main">
            <li className="nav-ele"><a href="#">Home</a></li>
            <li className="nav-ele"><a href="#">Your library</a></li>
            <li className="nav-ele"><a href="#">Create</a></li>
        </ul>
    </nav>
  );
}

export default Header;