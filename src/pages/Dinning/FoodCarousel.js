import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./FoodCarousel.css";
import CardRes from "./CardRes";
import { Button } from "react-bootstrap";
import res1a from "../../images/DINNINGIMG/1a.jpg";
import res1b from "../../images/DINNINGIMG/1b.jpg";
import res1c from "../../images/DINNINGIMG/1c.jpg";
import res1d from "../../images/DINNINGIMG/1d.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="items1 container2 ">
    <img src={res1a} className="img" />
    <CardRes
      title="Sal"
      text="A pop up restaurant overlooking the glittering Arabian Gulf."
    />
  </div>,

  <div className="items1 container2">
    {" "}
    <img src={res1b} className="img" />
    <CardRes
      title="Al Iwan"
      text="Arabesque dining st its best, mezze with a difference."
    />
  </div>,
  <div className="items1 container2">
    {" "}
    <img src={res1c} className="img" />
    <CardRes
      title="L'Olivo"
      text="Intimate seafood fine dinning by award-winning chefs."
    />
  </div>,
  <div className="items1 container2">
    <img src={res1d} className="img" />{" "}
    <CardRes
      title="Sahn Eddar"
      text='"Reception of the house", the perfect spot for lunch. '
    />
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
  />
);
export default Carousel;
