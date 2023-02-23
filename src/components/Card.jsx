import React from 'react';
import './Card.css';

const Card = ({ title, url, github, image }) => {
  return (
    <div class="card">
      <h3 class="card-title">{title}</h3>

      <img src={image} alt="Project 1" class="card-img" />
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          massa eu elit lobortis venenatis.
        </p>
        <a href={github} target="_blank" class="card-link" rel="noreferrer">
          Github Link
        </a>
        <a href={url} target="_blank" class="card-link" rel="noreferrer">
          Check It Out
        </a>
      </div>
    </div>
  );
};

export default Card;
