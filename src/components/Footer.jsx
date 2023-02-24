import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <Router>
          <Link to="https://www.facebook.com/akinademayowa" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://wa.me/+2349032055129" target="_blank">
            <FaWhatsapp />
          </Link>
          <Link to="https://wa.me/+2348187669362" target="_blank">
            <FaWhatsapp />
          </Link>
          <Link to="https://www.github.com/MayowaFunmi" target="_blank">
            <FaGithub />
          </Link>
          <Link to="https://www.linkedin.com/in/mayowaakinade" target="_blank">
            <FaLinkedin />
          </Link>
        </Router>
      </div>
      <p>&copy; 2023 Akinade Mayowa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
