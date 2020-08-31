import React from 'react';

import './card.css';

const Card = ({ image, title, description }) => (
  <div class="card mb-3 d-flex justify-content-center">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src={image} class="card-img" alt={image} />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
