import React from "react";
import Hero from "../../components/common/Hero/Hero";
import Form from "./Form";

const BookingForm = () => {
  console.log("merge booking f");

  return (
    <Hero hero="bookingHero">
      <Form />
    </Hero>
  );
};
export default BookingForm;
