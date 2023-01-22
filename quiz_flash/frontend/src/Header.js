import React from "react";
import "./Header.css"

function Header(props) {
  return (
    <nav>
      <link rel="stylesheet" href="../../style.css"/>
        <div class="title_container">
          <h1 class="title_text">QuizFlash</h1>
        </div>
        <ul className="navbar-main">
            <li className="nav-ele" class="nav_text"><a href="#">Home</a></li>
            <li className="nav-ele" class="nav_text"><a href="#">Your library</a></li>
            <li className="nav-ele" class="nav_text"><a href="#">Create</a></li>
        </ul>
    </nav>
  );
}

export default Header;