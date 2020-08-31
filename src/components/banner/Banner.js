import React from 'react';

import './banner.css';
import { Link } from 'react-router-dom';

const Banner = () => (
  <div className="banner-container">
    <div className="bg-banner p-3">
      <h1>Es momento de avanzar juntos...</h1>
      <p>
        En Sell Car queremos capacitarte para potenciar tus habilidades como
        asesor al máximo.
      </p>
      <Link to="/courses">
        <button className="btn btn-light mt-5">Ir a los coursos</button>
      </Link>
    </div>
  </div>
);
export default Banner;
