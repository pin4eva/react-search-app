import React from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <header>
      <nav className="navbar container">
        <Link to="/" className="brand text-decoration-none link-dark">
          Ububa
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link link-dark">
              About
            </Link>{" "}
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link link-dark">
              Contact Us
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComp;
