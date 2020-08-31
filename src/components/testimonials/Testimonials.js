import React from 'react';

import './testimonials.css';

import Adviser from '../../assets/images/adviser.jpg';
import WomanAdviser from '../../assets/images/womanAdviser.jpg';
import WomanAdviserTwo from '../../assets/images/womanAdviserTwo.jpg';

const Testimonials = () => (
  <div className="container-fluid testimonials-container">
    <div className="row d-flex justify-content-center p-5">
      <h1>Testimonios</h1>
    </div>
    <div className="row">
      <div className="col d-flex justify-content-center m-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={Adviser} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center m-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={WomanAdviser} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center m-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={WomanAdviserTwo} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Testimonials;
