import { Placeholder } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Sdata from "../../Sdata";
import "../Booking/DropdownButton.css";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton() {
  return (
    <Form.Select
      aria-label="Default select example"
      // defaultValue={"Choose a room"}
    >
      <option
        value=" "
        // disabled
        // selected
        hidden
        // placeholder="Choose your room"
      >
        Choose a room
      </option>
      <option value="1">Royal Room</option>
      <option value="2">Double-Deluxe</option>
      <option value="3">Aquarium Room</option>
      <option value="4">Single-Deluxe</option>
      <option value="5">Double-Economy</option>
      <option value="6">Double-Basic</option>
      <option value="7">Double-Standard</option>
    </Form.Select>
  );

  //   return (
  //     <div>
  //       {Sdata.map((item) => {
  //         return (
  //           <div>
  //             <h1>{item.title}</h1>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // }
}

export default DropdownButton;
