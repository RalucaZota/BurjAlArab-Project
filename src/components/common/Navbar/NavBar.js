// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../common/Navbar.css";
// import Icon1 from "../common/Icon1.png";
// import Home from "../../pages/Home/Home";
// import RoomItem from "../../pages/Rooms/RoomItem";
// import Dinning from "../../pages/Dinning/Dinning";
// import Spa from "../../pages/Facilities/Spa";
// import Fitness from "../../pages/Facilities/Fitness";
// import BookingForm from "../../pages/Booking/BookingForm";

// function NavBar() {
//   return (
//     <Navbar bg="transparent" expand="lg" className=" navbar, show-nav">
//       <Container className="nav-header">
//         <Navbar.Brand href="/home" className="nav-icon">
//           <img src={Icon1} height="42px" width="35px" alt="Burj Al Arab" /> Burj
//           Al Arab Hotel
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className=" nav-links, nav-links a "
//         >
//           <Nav className="me-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/rooms">Rooms </Nav.Link>
//             <Nav.Link href="/rooms/:slug">Rooms</Nav.Link>
//             <Nav.Link href="/dinning">Dinning</Nav.Link>

//             <NavDropdown title="Facilities" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/spa">Spa</NavDropdown.Item>
//               <NavDropdown.Item href="/fitness">Fitness</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link href="/booking">Booking</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
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
