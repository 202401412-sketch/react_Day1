import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItemsCount } from '../redux/slices/cartSlice';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const totalCartCount = useSelector(selectTotalItemsCount);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top shadow-sm ${
        isDark ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-white border-bottom'
      }`}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/">
          <span className="badge bg-primary fs-6">SPA</span>
          <span className={isDark ? 'text-white' : 'text-dark'}>Task & Shop Suite</span>
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
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${
                    isActive
                      ? 'active fw-bold text-primary border-bottom border-primary border-2'
                      : isDark
                      ? 'text-light'
                      : 'text-dark'
                  }`
                }
              >
                📋 Task Tracker
              </NavLink>
            </li>

            <li className="nav-item position-relative">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${
                    isActive
                      ? 'active fw-bold text-primary border-bottom border-primary border-2'
                      : isDark
                      ? 'text-light'
                      : 'text-dark'
                  }`
                }
              >
                🛒 Shop Cart
                {totalCartCount > 0 && (
                  <span className="badge rounded-pill bg-danger ms-2 shadow-sm">
                    {totalCartCount}
                  </span>
                )}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${
                    isActive
                      ? 'active fw-bold text-primary border-bottom border-primary border-2'
                      : isDark
                      ? 'text-light'
                      : 'text-dark'
                  }`
                }
              >
                📝 Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-3 fw-semibold ${
                    isActive
                      ? 'active fw-bold text-primary border-bottom border-primary border-2'
                      : isDark
                      ? 'text-light'
                      : 'text-dark'
                  }`
                }
              >
                ℹ️ About
              </NavLink>
            </li>

            {/* Theme Toggle Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button
                onClick={toggleTheme}
                className={`btn btn-sm fw-semibold rounded-pill px-3 d-flex align-items-center gap-2 ${
                  isDark ? 'btn-outline-warning text-warning' : 'btn-outline-dark'
                }`}
                title="Toggle Light/Dark Theme Mode"
              >
                <span>{isDark ? '☀️ Light' : '🌙 Dark'}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
