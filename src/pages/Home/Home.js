import "./Home.css";
import Hero from "../../components/common/Hero/Hero";
import Banner from "../../components/common/Banner/Banner";
// import "../../components//common/Banner.css";
import { Link } from "react-router-dom";
import Services from "../Home/Services/Services";
import SuitesCarousel from "./SuitesCarousel/SuitesCarousel";
import SuitesTitle from "./SuitesCarousel/SuitesTitle";

export default function Home() {

  return (
    <>
      <Hero>
        <Banner
          title="Dream Experience at Burj Al Arab"
          subtitle="For our valued guests"
        >
          <Link to="/rooms" className="btn-primary">
            Our Offers
          </Link>
        </Banner>
      </Hero>
      <Services />
      <SuitesTitle />
      <SuitesCarousel />
      {/* <FeaturedRooms /> */}
    </>
  );
}
