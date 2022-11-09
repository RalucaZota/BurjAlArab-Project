import React from "react";
import Hero from "../../components/common/Hero/Hero";
import FoodCarousel from "./FoodCarousel";
import Title from "../Home/Services/Title";
import Banner from "../../components/common/Banner/Banner";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap";

export default function Dinning() {
  return (
    <>
      <Hero hero="dinningHero">
        <Banner
          title="Exquisite Dinning"
          // subtitle="For our valued guests"
        >
          <Link to="/home" className="btn-primary">
            Our Specialities
          </Link>
        </Banner>
      </Hero>
      {/* <Container> */}
      <Title title="Our Restaurants" />
      <div>
        <FoodCarousel />
      </div>
      {/* </Container> */}
    </>
  );
}
