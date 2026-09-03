import React from 'react';
import { useTheme } from '../context/ThemeContext';

export function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="about-page py-4">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Unified SPA Architecture Overview</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '750px' }}>
          This application seamlessly integrates all technical requirements from <strong>Assignments 1, 2, 3, and 4</strong> into a single production-ready React application.
        </p>
      </div>

      {/* Grid of 4 Assignment Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className={`card h-100 border-0 shadow-sm rounded-4 ${isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
            <div className="card-body p-4 text-center">
              <span className="badge bg-primary fs-6 mb-3">Assignment 1</span>
              <h5 className="fw-bold">React Fundamentals</h5>
              <p className="small text-muted mb-0">
                JSX architecture, component breakdown, prop drilling, conditional rendering (`? :` & `&&`), dynamic styling logic.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className={`card h-100 border-0 shadow-sm rounded-4 ${isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
            <div className="card-body p-4 text-center">
              <span className="badge bg-success fs-6 mb-3">Assignment 2</span>
              <h5 className="fw-bold">Hooks & 4 Styling Modes</h5>
              <p className="small text-muted mb-0">
                Custom `useTasks` hook, `localStorage` persistence, Inline Styles (Header), Styled Components (Controls), CSS Modules (TaskCard), & Traditional CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className={`card h-100 border-0 shadow-sm rounded-4 ${isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
            <div className="card-body p-4 text-center">
              <span className="badge bg-warning text-dark fs-6 mb-3">Assignment 3</span>
              <h5 className="fw-bold">Router, Forms & Axios</h5>
              <p className="small text-muted mb-0">
                React Router DOM 7, custom `useForm` hook, 5 validated input fields, Axios POST to reqres.in API, and 404 fallback routing.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className={`card h-100 border-0 shadow-sm rounded-4 ${isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
            <div className="card-body p-4 text-center">
              <span className="badge bg-info text-dark fs-6 mb-3">Assignment 4</span>
              <h5 className="fw-bold">Dual State Management</h5>
              <p className="small text-muted mb-0">
                Theme Context API for global Light/Dark mode + Redux Toolkit store (`cartSlice`) for shopping cart state & Navbar count badge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
