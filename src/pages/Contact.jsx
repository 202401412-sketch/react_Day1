import React from 'react';
import { useForm } from '../hooks/useForm';

// Form validation logic for 5 required fields
function validateContactForm(values) {
  const errors = {};

  if (!values.fullName || !values.fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  }

  if (!values.email || !values.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address format.';
  }

  if (!values.password) {
    errors.password = 'Password is required.';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.';
  }

  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Phone number is required.';
  }

  if (!values.message || !values.message.trim()) {
    errors.message = 'Message / Address is required.';
  }

  return errors;
}

const initialFormValues = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  message: '',
};

export function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    apiError,
    responseData,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(initialFormValues, validateContactForm, 'https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="contact-page py-4">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="card-header bg-dark text-white p-4">
              <h2 className="card-title fw-bold mb-1">Contact / Registration Form</h2>
              <p className="card-subtitle text-light opacity-75 mb-0 small">
                Submit your details below. Validated via `useForm` custom hook & submitted via `axios`.
              </p>
            </div>

            <div className="card-body p-4 p-md-5">
              {/* Success Alert */}
              {isSuccess && (
                <div className="alert alert-success alert-dismissible fade show rounded-3 p-4 mb-4" role="alert">
                  <div className="d-flex align-items-center mb-2">
                    <span className="fs-3 me-2">🎉</span>
                    <h5 className="alert-heading fw-bold mb-0">Form Submitted Successfully!</h5>
                  </div>
                  <p className="mb-2 text-dark">
                    Your data was transmitted to the API endpoint via Axios POST request.
                  </p>
                  {responseData && (
                    <div className="bg-white p-3 rounded-2 border border-success border-opacity-50">
                      <small className="fw-bold text-success d-block mb-1">API Response Payload:</small>
                      <pre className="mb-0 small text-dark" style={{ maxHeight: '120px', overflowY: 'auto' }}>
                        {JSON.stringify(responseData, null, 2)}
                      </pre>
                    </div>
                  )}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success mt-3"
                    onClick={resetForm}
                  >
                    Submit Another Response
                  </button>
                </div>
              )}

              {/* Error Alert */}
              {apiError && (
                <div className="alert alert-danger rounded-3 p-3 mb-4" role="alert">
                  <strong>⚠️ Submission Error:</strong> {apiError}
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate>
                {/* 1. Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-semibold">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.fullName ? 'is-invalid' : ''}`}
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={values.fullName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                </div>

                {/* 2. Email Address */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={values.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* 3. Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password <span className="text-danger">*</span>
                  </label>
                  <input
                    type="password"
                    className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    placeholder="Minimum 6 characters"
                    value={values.password}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  <small className="form-text text-muted">Must contain at least 6 characters.</small>
                </div>

                {/* 4. Phone Number */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={values.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                {/* 5. Message / Address */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message / Address <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className={`form-control form-control-lg ${errors.message ? 'is-invalid' : ''}`}
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message or full address detail..."
                    value={values.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                {/* Submit Button */}
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg fw-semibold shadow-sm py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Transmitting via Axios...
                      </>
                    ) : (
                      'Submit Form Request \u2192'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
