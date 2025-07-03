// src/core/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../../assets/logo.png'; // Add your logo image in public/assets


const Header = () => {
  const location = useLocation();

  // Function to check if a path is the current one
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo">
        <img src="../assets/logo.png" alt="TAASLER Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li className={isActive('/summary') ? 'active' : ''}>
            <Link to="/summary">Summary</Link>
          </li>
          <li className={isActive('/personal-details') ? 'active' : ''}>
            <Link to="/personal-details">Personal Details</Link>
          </li>
          <li className={isActive('/professional-experience') ? 'active' : ''}>
            <Link to="/professional-experience">Professional Exp</Link>
          </li>
          <li className={isActive('/account') ? 'active' : ''}>
            <Link to="/account">Account</Link>
          </li>
          <li className={isActive('/jobs') ? 'active' : ''}>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className={isActive('/messages') ? 'active' : ''}>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
      </nav>
      <button className="signout-button">Sign Out</button>
    </header>
  );
}

export default Header;
