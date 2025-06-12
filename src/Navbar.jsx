import React, { useState } from "react";
import logo from "./images/Link.png";
import { Link } from "react-router-dom";
import './App.css';

// Define your navigation links
const navLinks = [
  { name: "Home", to: "/" },
  { name: "About us", to: "/about" },
  { name: "Services", to: "/experience" },
  { name: "Events", to: "/innerpeace" },
  { name: "Resources", to: "/resources" },
  { name: "Blogs", to: "/blogs" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md fixed-top shadow-sm border-bottom bg-white">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle shadow-sm"
            style={{ height: "56px", width: "56px", objectFit: "cover" }}
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  to={link.to}
                  className="nav-link fw-semibold"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
