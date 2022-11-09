import React from "react";
import Hero from "../../components/common/Hero/Hero";
import "../Facilities/Facilities.css";
import { Button } from "react-bootstrap";
export default function Facilities() {
  return (
    <Hero hero="facilitiesHero">
      <div className="art1">
        <h1 className="facility1">Your quest for wellness starts here</h1>
        <h3 className="facility2">
          With everything from gyms and spas, to yoga and paddle-boarding, Burj
          Al Arab is the ultimate retreat for mind, body and soul.
        </h3>
        <div className="art2">
          <button className="button1">SPA</button>
          <button className="button1">FITNESS</button>
        </div>
      </div>
    </Hero>
  );
}
