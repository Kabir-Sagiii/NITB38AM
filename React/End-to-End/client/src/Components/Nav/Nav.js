import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            React-Express-Mongodb
          </a>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/user" className="nav-link text-white">
                User
              </Link>
            </li>

            <li>
              <Link to="/redux" className="nav-link text-white">
                Redux
              </Link>
            </li>
            <li>
              <Link to="/nuser" className="nav-link text-white">
                New User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
