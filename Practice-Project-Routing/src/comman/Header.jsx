import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="logo">EcoStore</h1>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/about-us">About</Link>
          </li>
          <li>
            <Link className="nav-link" to="/course">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
