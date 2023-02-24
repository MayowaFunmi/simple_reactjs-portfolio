import React from 'react';
import './Card.css';

const Card = ({ title, url, github, image }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>

      <img src={image} alt="Project 1" className="card-img" />
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          massa eu elit lobortis venenatis.
        </p>
        <a href={github} target="_blank" className="card-link" rel="noreferrer">
          Github Link
        </a>
        <a href={url} target="_blank" className="card-link" rel="noreferrer">
          Check It Out
        </a>
      </div>
    </div>
  );
};

export default Card;
