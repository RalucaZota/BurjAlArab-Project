import React from "react";

import "../Rooms/PopularRooms.css";
import AllItems from "./AllItems";

export default function PopularRooms() {
  return (
    <>
      <section className="popular">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Rooms</h1>
            <div className="line"></div>
          </div>
          <div className="content">
            <AllItems />
          </div>
        </div>
      </section>
    </>
  );
}
