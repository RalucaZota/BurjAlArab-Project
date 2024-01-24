import React, { Component } from "react";
import logo2 from "./logo2.png";
import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import { NavLink } from "react-router-dom";

import scris2 from "./scris2.png";

export default function NavBar() {
  const [isMobile, setisMobile] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div>
        <Link to="/">
          <img src={scris2} alt="Burj Al Arab Hotel" className="sigla" />
        </Link>
      </div>
      <div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setisMobile(false)}
        >
          <li>
            <Link to="/" id="home" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" id="rooms" className="rooms">
              Rooms
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/dinning" id="dinning" className="dinning">
              Dinning
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/facilities" id="facilities" className="facilities">
              Facilities{" "}
            </Link>
          </li>{" "}
          <li>
            <Link to="/bookingform" id="bookingform" className="bookingform">
              Booking
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setisMobile(!isMobile)}
        >
          {" "}
          <FaAlignRight className="nav-icon" />
          {isMobile ? (
            <i className="fas-fa-times"></i>
          ) : (
            <i className="fas-fa-bars"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
