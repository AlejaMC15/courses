import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import './header.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <a className="navbar-brand" href="#">
          <img src={logoImg} className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
