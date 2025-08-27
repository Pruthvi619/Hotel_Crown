import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Facilities = () => {
  //const handleBookingClick = () => {
    // Navigate to bookingPage.html
    //window.location.href = 'bookingPage.html';
  //};

  return (
    <div>
      <Header />
      <main>
        <h2>Discover Our Facilities</h2>
        <p>
          We offer world-class facilities to make your stay unforgettable. Relax, work, and play in comfort and style.
        </p>

        <section className="facility-grid">
          <div className="facility-card">
            <img src="/Assets/spa.jpeg" alt="Spa Facilities" />
            <div className="facility-info">
              <h3>Spa & Wellness</h3>
              <p>Unwind with luxurious treatments and full relaxation therapies in our spa oasis.</p>
            </div>
          </div>

          <div className="facility-card">
            <img src="/Assets/gym 1.jpeg" alt="Hotel Gym" />
            <div className="facility-info">
              <h3>Gym & Fitness</h3>
              <p>Stay active with our state-of-the-art fitness centre open 24/7.</p>
            </div>
          </div>

          <div className="facility-card">
            <img src="/Assets/pool.jpeg" alt="Swimming Pool" />
            <div className="facility-info">
              <h3>Indoor Pool</h3>
              <p>Enjoy a peaceful swim in our temperature-controlled indoor pool.</p>
            </div>
          </div>

          <div className="facility-card">
            <img src="/Assets/dining 3.jpeg" alt="Restaurant" />
            <div className="facility-info">
              <h3>Restaurant</h3>
              <p>Dine with exquisite dishes prepared by our world-class chefs.</p>
            </div>
          </div>

          <div className="facility-card">
            <img src="/Assets/bar.jpg" alt="Bar" />
            <div className="facility-info">
              <h3>Bar & Lounge</h3>
              <p>Relax with signature cocktails and fine wines in a cosy setting.</p>
            </div>
          </div>

          <div className="facility-card">
            <img src="/Assets/conference 1.jpeg" alt="Conference Rooms" />
            <div className="facility-info">
              <h3>Conference Rooms</h3>
              <p>Host professional meetings in our fully equipped event spaces.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
