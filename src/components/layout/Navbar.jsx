import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">

          {/* BRAND */}
          <div className="navbar-brand">
            <img src={logo} alt="Lourde Matha Logo" className="brand-logo" />
            <div className="brand-text">
              <h1>Lourde Matha</h1>
              <span>Love • Knowledge • Service</span>
            </div>
          </div>


          {/* DESKTOP MENU */}
          <nav className="navbar-menu" aria-label="Primary Navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/academics">Academics</NavLink>
            <NavLink to="/student-life">Student Life</NavLink>
            <NavLink to="/updates">Updates</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/rules">Rules</NavLink>
            <NavLink to="/admissions">Admissions</NavLink>
            <NavLink to="/contact" className="nav-cta">
              Contact
            </NavLink>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}
      <aside className={`mobile-nav ${open ? "show" : ""}`}>

        {/* MOBILE HEADER */}
        <div className="mobile-header">
          {/* BRAND */}
          <div className="navbar-brand">
            <img src={logo} alt="Lourde Matha Logo" className="brand-logo" />
            <div className="brand-text">
              <h1>Lourde Matha</h1>
              <span>Love • Knowledge • Service</span>
            </div>
          </div>


          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* MOBILE LINKS */}
        <nav aria-label="Mobile Navigation">
          <NavLink onClick={closeMenu} to="/" end>Home</NavLink>
          <NavLink onClick={closeMenu} to="/about">About</NavLink>
          <NavLink onClick={closeMenu} to="/academics">Academics</NavLink>
          <NavLink onClick={closeMenu} to="/student-life">Student Life</NavLink>
          <NavLink onClick={closeMenu} to="/updates">Updates</NavLink>
          <NavLink onClick={closeMenu} to="/rules">Rules</NavLink>
          <NavLink onClick={closeMenu} to="/gallery">Gallery</NavLink>
          <NavLink onClick={closeMenu} to="/admissions">Admissions</NavLink>

          {/* MOBILE CTA */}
          <NavLink
            onClick={closeMenu}
            to="/contact"
            className="mobile-cta"
          >
            Contact School
          </NavLink>
        </nav>
      </aside>

      {/* BACKDROP */}
      {open && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden
        />
      )}
    </>
  );
}
