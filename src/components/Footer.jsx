import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "../styles/style.css"

const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/ryan-petersen-33b941310/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/people/Ryan-Petersen/pfbid0wma3yXTmQfD2iyTd33f6HBbPZVZpmmP74oXMtey1Y22jesigEEqGUeVGeWhmgfdul/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/RyanPetersen-89" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ryan_petersen89/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:rp268980@gmail.com">
          <MdEmail />
        </a>
      </div>
    </div>
  </footer>
);
};

export default Footer;