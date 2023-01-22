import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css"

function Header(props) {
  return (
    <nav>
      <link rel="stylesheet" href="../../style.css"/>
        <div className="title_container">
          <h1 className="title_text">QuizFlash</h1>
        </div>
        <ul className="navbar-main">
            <li className="nav-ele nav_text"><Link to="App.js">Home</Link></li>
            <li className="nav-ele nav_text"><a href="/">Your library</a></li>
            <li className="nav-ele nav_text"><Link to="Lobby.js">Create</Link></li>
        </ul>
    </nav>
  );
}

export default Header;