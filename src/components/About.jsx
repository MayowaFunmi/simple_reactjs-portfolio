import pic from '../images/portfolio_pic.png';
import './About.css';

function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          I am a frontend developer with X years of experience. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
      <div>
        <img src={pic} alt="" className="about-me-image" />
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
