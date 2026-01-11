import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Result from './pages/Result';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        {/* Navigation */}
        <nav className="nav">
          <div className="container nav-content">
            <NavLink to="/" className="nav-logo">
              <span className="gradient-text">🎯 CareerAI</span>
            </NavLink>
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'active' : ''}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/form"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  Get Started
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p className="footer-text">
              © 2026 CareerAI Guide. Built with ❤️ for students everywhere.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
