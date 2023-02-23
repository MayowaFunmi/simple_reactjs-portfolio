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
      <div className="about-image">
        <img src={pic} alt="" className="about-me-image" />
      </div>
      <div className="about-skill">
        <div className="languages">
          <h3>Languages</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>

        <div className="frameworks">
          <h3>Frameworks</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
