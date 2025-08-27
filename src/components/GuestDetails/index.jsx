import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const GuestDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state || {};

  const [guest, setGuest] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuest(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add more validation here if needed
    navigate('/payment', {
      state: {
        ...bookingData,
        guestDetails: guest
      }
    });
  };

  return (
    <>
      <Header />
      <main className="guest-details-main">
        <form className="guest-details-form" onSubmit={handleSubmit}>
          <h2>Guest Information</h2>

          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={guest.fullName}
            onChange={handleChange}
            required
            placeholder="Enter full name"
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={guest.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={guest.phone}
            onChange={handleChange}
            required
            placeholder="Enter phone number"
          />

          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={guest.guests}
            onChange={handleChange}
            required
          />

          <label htmlFor="specialRequest">Special Requests</label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            rows="3"
            value={guest.specialRequest}
            onChange={handleChange}
            placeholder="Any special requests?"
          ></textarea>

          <button type="submit" className="btn-next">Proceed to Payment</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default GuestDetails;
