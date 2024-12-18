import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".navbar")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Amrutam Logo" />
      </div>

      <div className={`navbar-links-container ${dropdownOpen ? "active" : ""}`}>
        <nav className="navbar-links">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setDropdownOpen(false)} // Close dropdown when clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/find-doctors"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setDropdownOpen(false)}
          >
            Find Doctors
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setDropdownOpen(false)}
          >
            About Us
          </NavLink>
        </nav>

        <div className="navbar-buttons">
          <button className="login-button" onClick={() => setDropdownOpen(false)}>Login</button>
          <button className="signup-button" onClick={() => setDropdownOpen(false)}>Sign-up</button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`navbar-hamburger ${dropdownOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
