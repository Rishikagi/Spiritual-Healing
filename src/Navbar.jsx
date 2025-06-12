import React, { useState } from "react";
import logo from "./images/Link.png";
import { Link } from "react-router-dom";
import './App.css';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/experience" },
  { name: "Events", href: "/innerpeace" },
  { name: "Resources", href: "/resources" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md t fixed-top shadow-sm border-bottom">
      <div className="container">
        {/* Logo */}
        <div className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="rounded-circle shadow-sm"
            style={{ height: "56px", width: "56px", objectFit: "cover" }}
          />
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {navLinks.map((link) =>
              link.name === "About us" || link.name === "Home" ? (
                <li className="nav-item" key={link.name}>
                  <Link
                    to={link.href}
                    className="nav-link fw-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li className="nav-item" key={link.name}>
                  <a
                    href={link.href}
                    className="nav-link fw-semibold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
