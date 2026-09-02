import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/">
          <span className="badge bg-primary fs-6">A3</span>
          <span>TaskPortal</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${isActive ? 'active text-white border-bottom border-primary border-2' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${isActive ? 'active text-white border-bottom border-primary border-2' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${isActive ? 'active text-white border-bottom border-primary border-2' : ''}`
                }
              >
                Contact / Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
