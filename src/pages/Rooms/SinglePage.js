import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sdata from "../../Sdata";
import EmptyFile from "../../components/common/Empty/EmptyFile";
// import Error from "../Error";
import { useParams } from "react-router-dom";
import HeadTitle from "../../components/common/HeadTitle/HeadTitle";
import "./SinglePage.css";
import Banner from "../../components/common/Banner/Banner";
import Hero from "../../components/common/Hero/Hero";
import Title from "../Home/Services/Title";

const SinglePage = (props) => {
  const { id } = useParams();
  const [item, setItem] = useState(false);

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTitle />
      <Hero hero="singlePageHero">
        <Banner title="Welcome to our accomodation">
          <Link to="/rooms" className="btn-primary">
            Our Offers
          </Link>
        </Banner>
      </Hero>
      <Title title={item.title} />

      <section className="roomContainer">
        <div>
          <img src={item.img} height="350rem" width="550rem"></img>
        </div>
        <div>
          <img src={item.Img_one} height="350rem" width="550rem"></img>
        </div>
        <div>
          <img src={item.Img_two} height="350rem" width="550rem"></img>
        </div>
      </section>
      <div className="display">
        <article className="description">
          <h2>Details</h2>
          <p>{item.desc}</p>
          <p>{item.desc}</p>
          <p>{item.desc}</p>
        </article>
        <article className="info">
          <h2>Info</h2>
          <h6>Price: {item.price}</h6>
          <h6>Size: {item.Size}</h6>
          <h6>Max Capacity: {item.Maxcapacity} </h6>
          <h6>Additional Info: {item.infoPets}</h6>
        </article>
      </div>
    </>
  );
};

export default SinglePage;
