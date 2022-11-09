import React, { Component } from "react";
import Title from "../Services/Title";
import "./Services.css";
import { FaCocktail, FaSwimmingPool } from "react-icons/fa";
import { MdOutlineAirportShuttle, MdFitnessCenter } from "react-icons/md";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: " Unlimited access to a wide range of cocktails.",
      },
      {
        icon: <FaSwimmingPool />,
        title: "Unlimited Access to the Swimmingpool",
        info: "During the day you have unlimited access to our pools.",
      },

      {
        icon: <MdOutlineAirportShuttle />,
        title: "Free Shuttle",
        info: "Our hotel provides a car to take you to and from the airport.",
      },
      {
        icon: <MdFitnessCenter />,
        title: "Unlimited Access to our Gym",
        info: "During the day you have unlimited access to the gym.",
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid services">
        <Title title="Luxury Services" />
        <div className="row">
          {this.state.services.map((item, index) => {
            return (
              <div
                className="col-md-4 col-lg-3 col-12 mx-auto my-3"
                key={index}
              >
                <div className="card shadow-lg border-0 p-4">
                  <article className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
