import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = ({ token, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="QuillSync Logo" className="navbar-logo-icon" /> QuillSync
      </Link>
      <div className="navbar-links">
        {token ? (
          <>
            <Link to="/documents">Documents</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
