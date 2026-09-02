import React from 'react';

export function About() {
  return (
    <div className="about-page py-4">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">About This Application</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Designed for Assignment 3 to showcase advanced frontend architecture, client-side routing, custom hook patterns, and HTTP REST integration.
        </p>
      </div>

      {/* Main Info Card */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-primary text-white py-3 px-4">
              <h4 className="mb-0 fw-bold">💡 Technical Overview</h4>
            </div>
            <div className="card-body p-4 p-md-5">
              <h5 className="fw-bold mb-3">Architectural Philosophy</h5>
              <p className="text-secondary">
                Modern React applications rely heavily on separation of concerns. By delegating side-effects, form state, and REST API communication to a reusable custom hook (`useForm`), our component layer remains declarative, clean, and easy to maintain.
              </p>
              <hr className="my-4" />

              <h5 className="fw-bold mb-3">Stack Specifications</h5>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 bg-light rounded-3 border">
                    <h6 className="fw-bold text-dark mb-1">React Router DOM 7</h6>
                    <small className="text-muted">
                      Handles client-side routing, route matchers, parameters, navigation links, and 404 fallback matching without page reloads.
                    </small>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 bg-light rounded-3 border">
                    <h6 className="fw-bold text-dark mb-1">Axios HTTP Client</h6>
                    <small className="text-muted">
                      Promise-based HTTP client for API interactions with automated JSON transformation and comprehensive error interception.
                    </small>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 bg-light rounded-3 border">
                    <h6 className="fw-bold text-dark mb-1">Custom Hook (`useForm`)</h6>
                    <small className="text-muted">
                      Centralizes form values, validation logic, submission state, error states, and success responses across the app.
                    </small>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-3 bg-light rounded-3 border">
                    <h6 className="fw-bold text-dark mb-1">Bootstrap 5 Integration</h6>
                    <small className="text-muted">
                      Responsive grid layout system (`container`, `row`, `col`), forms (`is-invalid`, `form-control`), and interactive utilities (`alert`, `badge`, `spinner`).
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
