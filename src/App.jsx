// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Rooms from './components/Rooms';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import Dining from './components/Dining';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'; // Import your main CSS file for global styles
import Booking from './components/Booking';
import GuestDetails from './components/GuestDetails';
import Payment from './components/Payment';
import ConfirmationPage from './components/ConfirmationPage';
import RoomsList from './components/RoomsList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/roomslist" element={<RoomsList />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guestdetails" element={<GuestDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmationpage" element={<ConfirmationPage />} />


      </Routes>
    </Router>
  );
}

export default App;
