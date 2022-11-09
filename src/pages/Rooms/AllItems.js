import React, { useState } from "react";
import Sdata from "../../Sdata";
import "../Rooms/AllItems.css";
import RoomCards from "./RoomCards";

const AllItems = () => {
  const [items, setIems] = useState(Sdata);
  return (
    <>
      <section className="gallery rooms">
        <div className="container ">
          <div className="content grid">
            {items.map((item) => {
              return <RoomCards key={item.id} item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllItems;
