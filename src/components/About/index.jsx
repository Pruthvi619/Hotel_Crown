import React from 'react';
// Assuming Header and Footer are in ../Header and ../Footer respectively
import Header from '../Header';
import Footer from '../Footer';
import './index.css'; // Create a new CSS file for About component styles

const About = () => {
  return (
    <>
      <Header /> {/* Your full-width Header component */}
      <div className="main-content-wrapper"> {/* Use your global content wrapper */}
        <div className="about-page-content"> {/* Specific container for About page content */}

          <section className="about-section">
            <h2 className="section-title">Welcome Message</h2>
            <p>At The Crown Hotel, we pride ourselves on providing an exceptional experience. From luxurious accommodations and fine dining to dedicated staff and world-class facilities, every aspect of your stay is tailored for excellence.</p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Story</h2>
            <p>Founded in 2025 in the heart of Norwich, The Crown Hotel has always been a symbol of personal service and timeless elegance. As an independent establishment, we are deeply committed to enriching our community and providing bespoke experiences for every guest.</p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p>To deliver unparalleled hospitality and create lasting memories for each guest, with warmth, excellence, and attention to detail at the core of everything we do.</p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Values</h2>
            <ul className="values-list">
              <li><strong>Excellence:</strong> Upholding the highest standards of quality and service.</li>
              <li><strong>Hospitality:</strong> Ensuring a warm and welcoming experience for all.</li>
              <li><strong>Sustainability:</strong> Advocating for eco-conscious practices and sourcing locally.</li>
              <li><strong>Community:</strong> Collaborating with local businesses and supporting charitable causes in Norwich.</li>
            </ul>
          </section>

          <section className="about-section">
            <h2 className="section-title">Meet Our Leadership</h2>
            <ul className="leadership-list">
              <li><strong>Yusuf Sigirci</strong> - General Manager</li>
              <li><strong>Pruthvi Reddy Arjula</strong> - Executive Chef</li>
              <li><strong>Youssef Saleh</strong> - Guest Relations Manager</li>
              <li><strong>Gilbert Boahen</strong> - Head of Housekeeping</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer /> {/* Your full-width Footer component */}
    </>
  );
};

export default About;