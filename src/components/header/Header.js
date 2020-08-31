import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import './header.css';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="{null}">
        <a className="navbar-brand" href="{null}">
          <img src={logoImg} className="logo" alt="logo" />
        </a>
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="{null}">
              <Link to="/" className="nav-link">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <Link to="/courses" className="nav-link" href="{null}">
                Cursos
              </Link>
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="{null}">
                Action
              </a>
              <a className="dropdown-item" href="{null}">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="{null}">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
