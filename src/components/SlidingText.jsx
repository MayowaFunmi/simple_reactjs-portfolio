import React, { useState, useEffect } from 'react';
import './SlidingText.css';

function SlidingText() {
  // state for the position of the text
  const [position, setPosition] = useState(0);

  // effect to animate the text
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => prevPosition + 1);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-text-container">
      <div
        className="sliding-text"
        style={{ transform: `translateX(-${position}px)` }}
      >
        <h3 style={{ color: 'green' }}>My Portfolio</h3>
      </div>
    </div>
  );
}

export default SlidingText;
