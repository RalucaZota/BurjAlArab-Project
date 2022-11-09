// import SuitesTitle from "./SuitesTitle";
import "./SuitesCarousel.css";
import { GiJusticeStar } from "react-icons/gi";
import { Carousel } from "react-bootstrap";

function SuitesCarousel() {
  return (
    <>
      {/* <SuitesTitle /> */}
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/jumeirah-al-naseem-advance-purchase-offer-hero/jcom_hero_imageburj-al-arab-jumeirah--western-family--kids-amenities--hot-air-balloon/jcomheroimageburj-al-arab-jumeirah--western-family--kids-amenities--hot-air-balloon-1.jpg?h=1080&w=1920"
            alt="First slide"
          />

          <Carousel.Caption></Carousel.Caption>
          <div className="Suitescard">
            <h2 className="Stitle">Semi Flexible Rate</h2>
            <h4 className="Ssubtitle">
              Enjoy exclusive savings when you book 7 days in advance
            </h4>

            <ul>
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Up to 20% off our Felxible Rate
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Indulgent daily breakfast
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Access Talise Spa, Wild Wadi Waterpark and more
              </li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg?h=1080&w=1920"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
          <div className="Suitescard">
            <h2 className="Stitle">The Ultimate Suite Indulgence</h2>
            <h4 className="Ssubtitle">
              {" "}
              Stay for 3 nights or more and enjoy up to 20% off
            </h4>

            <ul>
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Indulgent daily breakfast for two
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Access to luxury leisure facilities on The Terrace
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Offer valid until 25 December 2022
              </li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/baauaeresidentshero_landscape/medium_resolution_150dpimadinat-jumeirah--western-couple--yacht--standing-burj-al-arab-view.jpg?h=1080&w=1920"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
          <div className="Suitescard">
            <h2 className="Stitle">Stay and Dine</h2>
            <h4 className="Ssubtitle">
              Book an indulgent stay with exclusive dinning included
            </h4>
            <ul>
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Daily complimentary breakfast
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />A choice of complimentary
                lunch or dinner
              </li>
              <br />
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Unlimited entry to Wild Wadi Waterpark{" "}
              </li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-jumeirah-terrace-offer-hero.jpg?h=1080&w=1920"
            alt="Forth slide"
          />

          <Carousel.Caption></Carousel.Caption>

          <div className="Suitescard">
            <h2 className="Stitle">The Terace Experience</h2>
            <h4 className="Ssubtitle">
              Book this offer and enjoy a complimentary luxury cabana on The
              Terrace
            </h4>
            <ul>
              <li>
                {" "}
                <GiJusticeStar className="star" />
                Indulgent daily breakfast
              </li>
              <br />
              <li>
                <GiJusticeStar className="star" />
                Complementary Luxury Cabana on The Terace
              </li>
              <br />
              <li>
                <GiJusticeStar className="star" />
                Butler service and Hermes amenities
              </li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default SuitesCarousel;
