import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="home-page py-4">
      {/* Hero Banner Section */}
      <section className="bg-dark text-white rounded-4 p-4 p-md-5 mb-5 shadow-lg position-relative overflow-hidden">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="badge bg-primary text-uppercase px-3 py-2 mb-3 rounded-pill">
              Assignment 3 &bull; Full React Stack
            </span>
            <h1 className="display-4 fw-bold mb-3">Modern React Application Suite</h1>
            <p className="lead text-light mb-4">
              Demonstrating full SPA capabilities with React Router DOM, Custom Hooks, client-side Form Validation, dynamic state feedback, and Axios HTTP REST integration.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary btn-lg px-4 fw-semibold shadow-sm">
                Get Started / Register &rarr;
              </Link>
              <Link to="/about" className="btn btn-outline-light btn-lg px-4 fw-semibold">
                Learn About Project
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <div className="p-4 bg-secondary bg-opacity-25 rounded-4 border border-light border-opacity-25">
              <div className="display-1">🚀</div>
              <h5 className="mt-2 text-info">Fast & Responsive</h5>
              <small className="text-light">Built with Vite, Bootstrap 5, & React 19</small>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="mb-4">
        <h2 className="text-center fw-bold mb-4">Core Architecture Modules</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-card">
              <div className="card-body text-center">
                <div className="badge bg-primary-subtle text-primary p-3 rounded-3 mb-3 fs-3">
                  🛣️
                </div>
                <h5 className="card-title fw-bold">React Router DOM</h5>
                <p className="card-text text-muted small">
                  Seamless client-side navigation with `BrowserRouter`, `Routes`, `Route`, and active `NavLink` styling.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-card">
              <div className="card-body text-center">
                <div className="badge bg-success-subtle text-success p-3 rounded-3 mb-3 fs-3">
                  ⚓
                </div>
                <h5 className="card-title fw-bold">Custom Hooks</h5>
                <p className="card-text text-muted small">
                  Encapsulated form logic, validation processing, loading states, and API dispatch inside `useForm`.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-card">
              <div className="card-body text-center">
                <div className="badge bg-warning-subtle text-warning p-3 rounded-3 mb-3 fs-3">
                  ✅
                </div>
                <h5 className="card-title fw-bold">Inline Validation</h5>
                <p className="card-text text-muted small">
                  Submit-time & real-time field validation with instant visual feedback and error messaging.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-3 hover-card">
              <div className="card-body text-center">
                <div className="badge bg-info-subtle text-info p-3 rounded-3 mb-3 fs-3">
                  🌐
                </div>
                <h5 className="card-title fw-bold">Axios HTTP Client</h5>
                <p className="card-text text-muted small">
                  Asynchronous REST POST requests to dummy public API with loading spinners and alert banners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
