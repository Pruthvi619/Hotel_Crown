import React, { useState } from 'react';
import RoomsList from '../RoomsList';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    roomType: '',
  });

  const [availableRooms, setAvailableRooms] = useState([]);
  const [availabilityResult, setAvailabilityResult] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookingMessage('');

    if (!formData.checkin || !formData.checkout || !formData.roomType) {
      setAvailabilityResult('Please fill all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/check-availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setAvailableRooms(data);
        setAvailabilityResult(data.length > 0
          ? `Found ${data.length} available room(s).`
          : 'No available rooms for selected dates and type.');
      } else {
        setAvailabilityResult('Failed to check availability. Try again.');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setAvailabilityResult('Server error.');
    }
  };

  const handleBookRoom = async (room_id) => {
    try {
      const res = await fetch('http://localhost:5000/book-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          room_id,
          checkin: formData.checkin,
          checkout: formData.checkout
        })
      });

      const result = await res.json();

      if (res.ok) {
        setBookingMessage(`✅ ${result.message}`);
      } else {
        setBookingMessage(`❌ ${result.error || 'Booking failed.'}`);
      }
    } catch (err) {
      console.error('Booking error:', err);
      setBookingMessage('❌ Server error.');
    }
  };

  return (
    <>
      <Header />

      <main className="booking-main">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="checkin">Check-in Date:</label>
          <input
            type="date"
            id="checkin"
            name="checkin"
            value={formData.checkin}
            onChange={handleChange}
            required
          />

          <label htmlFor="checkout">Check-out Date:</label>
          <input
            type="date"
            id="checkout"
            name="checkout"
            value={formData.checkout}
            onChange={handleChange}
            required
          />

          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Room Type --</option>
            <option value="std_d">Standard Double Room</option>
            <option value="std_t">Standard Twin Room</option>
            <option value="sup_d">Superior Double Room</option>
            <option value="sup_t">Superior Twin Room</option>
          </select>

          <button type="submit" className="btn-check-availability">Check Availability</button>
        </form>

        {availabilityResult && <div className="availability-results">{availabilityResult}</div>}
        {bookingMessage && <div className="booking-message">{bookingMessage}</div>}

        {availableRooms.length > 0 && (
          <RoomsList rooms={availableRooms} onBook={handleBookRoom} />
        )}
      </main>

      <Footer />
    </>
  );
};

export default Booking;
