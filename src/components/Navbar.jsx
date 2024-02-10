import React from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css';
import SlidingText from './SlidingText';
import MyCV from './MayowaResume.pdf';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h3 className="title">My Portfolio</h3> */}
      <SlidingText />
      <ul>
        <Router>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#projects">Project</Link>
          </li>
          <li>
            <Link to={MyCV} download="Akinade_Mayowa_Resume" target="_blank">
              Download PDF
            </Link>
          </li>
        </Router>
      </ul>
    </nav>
  );
};

export default Navbar;
