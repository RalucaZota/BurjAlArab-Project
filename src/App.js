import "./App.css";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "react-alice-carousel/lib/alice-carousel.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Dinning from "./pages/Dinning/Dinning";
import Facilities from "./pages/Facilities/Facilities";
import BookingForm from "./pages/Booking/BookingForm";
import { Error } from "./pages/Error";
import NavBar from "./components/common/Navbar/NavBar";
import Footer from "./components/common/Footer/Footer";

import SinglePage from "./pages/Rooms/SinglePage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />

        <Route path="/singlepage/:id" element={<SinglePage />} />

        <Route path="/dinning" element={<Dinning />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/bookingform" element={<BookingForm />} />

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
