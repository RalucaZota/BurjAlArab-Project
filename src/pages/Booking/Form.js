import React from "react";
import { useState, useEffect, reset } from "react";
import { Dropdown } from "react-bootstrap";
import "../Booking/Form.css";
import DropdownButton from "./DropdownButton";
import useInput from "./hooks/use-input";

export default function Form(props) {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  const {
    value: enteredLastName,
    hasError: lastnameHasError,
    isValid: enteredLastNameisValid,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameValue,
  } = useInput(isNotEmpty);

  const {
    value: enteredFirstName,
    hasError: firstnameHasError,
    isValid: enteredFirstNameisValid,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstnameValue,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: enteredEmailisValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailValue,
  } = useInput(isEmail);

  const [room, setRoom] = useState("");
  const [roomValue, setRoomValue] = useState("Choose a room");
  const [message, setMessage] = useState("");

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
    console.log(enteredLastName, enteredFirstName);
    // setFirstName("");
    // setLastName("");
    // setEmail("");

    e.target.reset();

    try {
      let reserv = await fetch(
        "https://bookingform2-757b9-default-rtdb.firebaseio.com/booking.json",
        {
          method: "POST",
          body: JSON.stringify({
            lastname: enteredLastName,
            firstName: enteredFirstName,
            email: enteredEmail,
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
        resetFirstnameValue("");
        resetLastnameValue("");
        resetEmailValue("");
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
  //if an input loses focused, definetely was touched/ the user had a change to work on it

  const handleSelect = (e) => {
    console.log(e);
    setRoom(e);
    // setRoomValue("");
  };

  const nameInputClasses =
    firstnameHasError && lastnameHasError && emailHasError
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
              value={enteredFirstName}
              id="FirstName"
              placeholder="First Name"
              onChange={firstnameChangeHandler}
              onBlur={firstNameInputBlurHandler}
            />
            {firstnameHasError && (
              <p className="error-text">First Name must not be empty.</p>
            )}
          </div>

          <div className="form-control">
            <label htmlFor="LastName">Last Name</label>
            <input
              type="text"
              value={enteredLastName}
              id="LastName"
              placeholder="Last Name"
              onChange={lastnameChangeHandler}
              onBlur={lastnameBlurHandler}
            />
            {lastnameHasError && (
              <p className="error-text">Last Name must not be empty.</p>
            )}
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              value={enteredEmail}
              id="Email"
              placeholder="Email"
              onChange={emailChangeHandler}
              onBlur={emailInputBlurHandler}
            />
            {emailHasError && (
              <p className="error-text">Email address must not be empty.</p>
            )}
          </div>
          <div>
            <DropdownButton onSelect={handleSelect} />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit" disabled={!formIsValid}>
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
