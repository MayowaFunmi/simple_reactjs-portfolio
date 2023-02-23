import React from 'react';
import './Navbar.css';
import SlidingText from './SlidingText';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h3 className="title">My Portfolio</h3> */}
      <SlidingText />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Project</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
