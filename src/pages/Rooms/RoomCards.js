import React from "react";
import { Link } from "react-router-dom";
//import Sdata from "./Sdata"

const RoomCards = ({
  item: { id, img, title, info, desc, Img_one, Img_two },
}) => {
  return (
    <Link to={`/singlepage/${id}`} className="blogItem-link">
      <div className="items">
        <div className="img">
          <img src={img} alt="Gallery Image" />

          <i className="fas fa-external-link-alt"></i>
        </div>
        <div className="title">
          <h3>{title} </h3>
        </div>
      </div>
    </Link>
  );
};

export default RoomCards;
