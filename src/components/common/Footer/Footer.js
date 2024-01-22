import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p> Copyright &copy; Lorena Raluca Zota</p>
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/lorena-raluca-zota/">
          <FaLinkedin size="2.5rem" className="connect text-dark" />
        </a>
        <a href="https://github.com/RalucaZota?tab=repositories">
          <FaGithub size="2.5rem" className="connect text-dark" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
