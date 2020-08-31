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
              Gracias a la capacitación constante en Sell Car he podido ser el
              mejor empleado del mes durante 3 meses consecutivos.
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center m-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={WomanAdviser} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Sin la capacitación que me permite Sell Car, no hubiera podido
              llegar a ser la jefe de personal como lo soy ahora.
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex justify-content-center m-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={WomanAdviserTwo} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Me capacito constantemente con los cursos que ofrece Sell Car,
              hace que mejore mis skills profesionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Testimonials;
