import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer id="sticky-footer" className="bg-light text-dark-50, footer">
    //   <div className="container py-1">
    //     <div className="row">
    //       <div className="col-md-6 col-12 my-auto">
    //         <small className="footer-name">
    //           Copyright &copy; Lorena Raluca Zota
    //         </small>
    //       </div>
    //       <div className="col-md-6 col-12">
    //         <div className="d-flex float-right, icons">
    //           <Link src="https://www.google.com">
    //             <FaLinkedin size="2.5rem" className="connect text-dark" />
    //           </Link>

    //           <Link src="https://github.com/RalucaZota?tab=repositories">
    //             <FaGithub size="2.5rem" className="connect text-dark" />
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
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
