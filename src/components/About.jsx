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
            I am a software/web developer with a good background in programming
            and web development. I am skilled in both frontend and backend web
            frameworks. I'm seeking a position with a dynamic company where i
            can contribute my skills while also open to learning from more
            experienced developers.
          </p>
        </div>
        <div className="about-image">
          <img src={pic} alt="" className="about-me-image" />
        </div>
        <div className="about-skill">
          <div className="languages">
            <h3 className="text">
              Languages <br /> & <br /> Databases
            </h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Ruby</li>
              <li>C</li>
              <li>SQL</li>
              <li>PostgresQL</li>
              <li>MongoDB</li>
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
