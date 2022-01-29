import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar bg-dark navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Axios Concept
          </Link>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chatapp" className="nav-link text-white">
                ChatApp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/axios" className="nav-link text-white">
                Axios
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link text-white">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/userprofile" className="nav-link text-white">
                User-Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
