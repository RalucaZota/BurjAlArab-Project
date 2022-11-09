import React from "react";
import "../Dinning/FoodCarousel.css";
import { Button } from "react-bootstrap";

export default function CardRes({ title, text }) {
  return (
    <div className="test">
      <h1>{title}</h1>
      <p>{text}</p>
      <Button className="btn-dark buttonc">More</Button>
    </div>
  );
}
