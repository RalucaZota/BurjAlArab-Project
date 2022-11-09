import React from "react";
import { useState, useEffect, reset } from "react";
import { Dropdown } from "react-bootstrap";
import "../Booking/Form.css";
import DropdownButton from "./DropdownButton";

export default function Form() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [value, setValue] = useState("Choose a room");
  const [message, setMessage] = useState("");
  const [lastNameisTouched, setLastNameisTouched] = useState(false);
  const [FirstNameisTouched, setFirstNameisTouched] = useState(false);
  const [emailisTouched, setEmailisTouched] = useState(false);

  const enteredLastNameisValid = lastName.trim() !== "";
  const enteredFirstNameisValid = firstName.trim() !== "";
  const enteredEmailisValid = email.trim() && email.includes("@") !== "";

  const LastNameisInvalid = !enteredLastNameisValid && lastNameisTouched;
  const FirstNameisInvalid = !enteredFirstNameisValid && FirstNameisTouched;
  const EmailisInvalid = !enteredEmailisValid && emailisTouched;

  let formIsValid = false;

  if (
    enteredFirstNameisValid &&
    enteredLastNameisValid &&
    enteredEmailisValid
  ) {
    formIsValid = true;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !enteredFirstNameisValid &&
      !enteredLastNameisValid &&
      !enteredEmailisValid
    ) {
      return;
    }
    console.log(lastName, firstName);
    // setFirstName("");
    // setLastName("");
    // setEmail("");
    setLastNameisTouched(false);
    setFirstNameisTouched(false);
    setEmailisTouched(false);
    e.target.reset();

    try {
      let reserv = await fetch(
        "https://booking-form-4720c-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          body: JSON.stringify({
            lastname: lastName,
            firstName: firstName,
            email: email,
            room: room,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await reserv.json();
      console.log(data);
      if (reserv.status === 200) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setRoom("");
        setMessage(
          "You have successfully booked your room. Further details will be sent by email."
        );

        // throw new Error("Something went wrong!");
      } else {
        setMessage("Some error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const firstNameInputBlurHandler = (e) => {
    setFirstNameisTouched(true);
  };

  const lastNameInputBlurHandler = (e) => {
    setLastNameisTouched(true);
  };
  const emailInputBlurHandler = (e) => {
    setEmailisTouched(true);
  };
  //if an input loses focused, definetely was touched/ the user had a change to work on it

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
    setRoom("");
  };

  const nameInputClasses =
    FirstNameisInvalid && LastNameisInvalid && EmailisInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={`group ${nameInputClasses}`}>
          <div className="form-control">
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              value={firstName}
              id="FirstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={firstNameInputBlurHandler}
            />
            {FirstNameisInvalid && (
              <p className="error-text">First Name must not be empty.</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              value={lastName}
              id="LastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              onBlur={lastNameInputBlurHandler}
            />
            {LastNameisInvalid && (
              <p className="error-text">Last Name must not be empty.</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              value={email}
              id="Email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={emailInputBlurHandler}
            />
            {EmailisInvalid && (
              <p className="error-text">Email address must not be empty.</p>
            )}
          </div>
          <div>
            <DropdownButton
              // value="Choose your room"
              // placeholder="Choose your room"
              onSelect={handleSelect}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
          <div className="mesaj">
            {message ? <p className="message">{message}</p> : null}
          </div>
        </div>
      </form>
    </>
  );
}
