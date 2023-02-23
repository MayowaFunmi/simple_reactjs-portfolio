import pic from '../images/portfolio_pic.png';
import './About.css';

function AboutMe() {
  return (
    <div>
      <center>
        <h2>About Me</h2>
      </center>
      <div className="about-me">
        <div className="about-me-text">
          <h2 className="text">Who am I?</h2>
          <p>
            I am a frontend developer with X years of experience. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="about-image">
          <img src={pic} alt="" className="about-me-image" />
        </div>
        <div className="about-skill">
          <div className="languages">
            <h3 className="text">Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>C</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="frameworks">
            <h3 className="text">Frameworks/Libraries</h3>
            <ul>
              <li>Django</li>
              <li>Reactjs</li>
              <li>Redux</li>
              <li>Reactjs Material UI</li>
              <li>Nodejs/Express js</li>
              <li>Ruby on rails</li>
              <li>Django rest framework</li>
              <li>jQuery/Ajax</li>
              <li>Bootstrap</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
