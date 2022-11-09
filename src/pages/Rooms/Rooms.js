import React from "react";
import Hero from "../../components/common/Hero/Hero";
import Banner from "../../components/common/Banner/Banner";
import { Link } from "react-router-dom";

import PopularRooms from "./PopularRooms";

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Luxury Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <PopularRooms />
    </>
  );
}
