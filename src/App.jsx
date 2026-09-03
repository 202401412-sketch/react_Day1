import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function AppContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`app-shell d-flex flex-column min-vh-100 ${isDark ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Navbar />

      <main className="container flex-grow-1 my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className={`py-4 text-center mt-auto border-top ${isDark ? 'bg-dark text-light border-secondary' : 'bg-white text-dark border-light-subtle'}`}>
        <div className="container">
          <p className="mb-1 fw-semibold">
            Unified Single Page Application &bull; Assignments 1, 2, 3, & 4
          </p>
          <small className="text-muted">
            Built with React 19, Redux Toolkit, Context API, React Router DOM 7, & Bootstrap 5
          </small>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}