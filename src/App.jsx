import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell d-flex flex-column min-vh-100 bg-light">
        <Navbar />

        <main className="container flex-grow-1 my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-dark text-light py-4 text-center mt-auto border-top border-secondary">
          <div className="container">
            <p className="mb-1 fw-semibold">
              Assignment 3 &bull; React Router, Custom Hooks, Form Validation & Axios Integration
            </p>
            <small className="text-secondary">
              Built with React 19, React Router DOM 7, Bootstrap 5, & Axios
            </small>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}