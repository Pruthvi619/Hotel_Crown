import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const { bookingData, guestDetails, paymentDetails } = location.state || {};

  if (!bookingData || !guestDetails || !paymentDetails) {
    return <div>No booking information found.</div>;
  }

  return (
    <>
      <Header />
      <main className="confirmation-main">
        <h2>Booking Confirmation</h2>
        
        <section>
          <h3>Booking Details</h3>
          <p>Check-in: {bookingData.checkin}</p>
          <p>Check-out: {bookingData.checkout}</p>
          <p>Room Type: {bookingData.roomType?.replace('_', ' ')}</p>
        </section>

        <section>
          <h3>Guest Details</h3>
          <p>Name: {guestDetails.fullName}</p>
          <p>Email: {guestDetails.email}</p>
          <p>Phone: {guestDetails.phone}</p>
          <p>Guests: {guestDetails.guests}</p>
          <p>Special Requests: {guestDetails.specialRequest || 'None'}</p>
        </section>

        <section>
          <h3>Payment Details</h3>
          <p>Card Number: **** **** **** {paymentDetails.cardNumber.slice(-4)}</p>
          <p>Expiry Date: {paymentDetails.expiry}</p>
        </section>

        <p>Thank you for your booking!</p>
      </main>
      <Footer />
    </>
  );
};

export default ConfirmationPage;
