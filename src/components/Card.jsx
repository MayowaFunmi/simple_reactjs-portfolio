import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, url, github, image, text }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>

      <img src={image} alt="Project 1" className="card-img" />
      <div className="card-body">
        <p className="card-text">{text}</p>
        <Router>
          <Link
            to={github}
            target="_blank"
            className="card-link"
            rel="noreferrer"
          >
            Github Link
          </Link>
          {url === '' ? (
            <Link className="card-link" rel="noreferrer">
              Link Not Available
            </Link>
          ) : (
            <Link
              to={url}
              target="_blank"
              className="card-link"
              rel="noreferrer"
            >
              Check It Out
            </Link>
          )}
        </Router>
      </div>
    </div>
  );
};

export default Card;
