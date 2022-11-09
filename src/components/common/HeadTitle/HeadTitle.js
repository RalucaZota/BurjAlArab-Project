import React from "react";
import "../HeadTitle/HeadTitle.css";
import { Link } from "react-router-dom";

export default function HeadTitle(props) {
  return (
    <>
      <section className="image-heading">
        <div className="container">
          <h1>{props.title}</h1>
        </div>
      </section>
    </>
  );
}
