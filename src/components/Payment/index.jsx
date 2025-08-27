import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { guestDetails, ...bookingData } = location.state || {};

  const [payment, setPayment] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add basic payment validation here if needed

    // On successful payment, navigate to confirmation page with all details
    navigate('/confirmationpage', {
      state: {
        bookingData,
        guestDetails,
        paymentDetails: payment,
      }
    });
  };

  return (
    <>
      <Header />
      <main className="payment-main">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Payment Details</h2>

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={payment.cardNumber}
            onChange={handleChange}
            required
            placeholder="1234 5678 9012 3456"
          />

          <label htmlFor="expiry">Expiry Date</label>
          <input
            type="month"
            id="expiry"
            name="expiry"
            value={payment.expiry}
            onChange={handleChange}
            required
          />

          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={payment.cvv}
            onChange={handleChange}
            required
            maxLength="4"
            placeholder="123"
          />

          <button type="submit" className="btn-pay">Pay Now</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
