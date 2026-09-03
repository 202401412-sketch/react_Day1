import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="not-found-page py-5 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`card border-0 shadow-lg rounded-4 p-5 ${isDark ? 'bg-dark text-white border border-secondary' : 'bg-white text-dark'}`}>
              <div className="display-1 text-danger fw-bold mb-3">404</div>
              <h2 className="fw-bold mb-3">Oops! Page Not Found</h2>
              <p className="text-muted mb-4">
                The requested URL route does not exist or has been moved to another location.
              </p>
              <div>
                <Link to="/" className="btn btn-primary btn-lg px-4 fw-semibold shadow-sm">
                  &larr; Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
