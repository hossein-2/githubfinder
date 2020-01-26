import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ branding }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <i className="fab fa-github" /> {branding}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  branding: "Github Finder"
};

Navbar.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Navbar;
