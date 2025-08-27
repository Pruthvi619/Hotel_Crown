import React from 'react';
// Assuming Header and Footer are in ../Header and ../Footer respectively
import Header from '../Header';
import Footer from '../Footer';
import './index.css'; // Create a new CSS file for Contact component styles

const Contact = () => {
  // You might want to add state management for form inputs if you plan to handle submissions
  // Here, it's a simple uncontrolled form as per your HTML-like structure.
  // For production, consider using state or a library like Formik.

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here you would typically send the form data to a backend
    console.log("Form submitted!");
    // You can access form data like:
    // const formData = new FormData(event.target);
    // console.log("Name:", formData.get("name"));
    // console.log("Email:", formData.get("email"));
    // console.log("Message:", formData.get("message"));
    alert("Message sent! (Check console for data)"); // Simple alert for demonstration
  };

  return (
    <>
      <Header /> {/* Your full-width Header component */}
      <div className="main-content-wrapper"> {/* Use your global content wrapper */}
        <div className="contact-container"> {/* Specific container for contact page content */}
          <h2 className="contact-title">Contact Us</h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <p>Email us: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>Call us: <a href="tel:+441234567890">+44 1234 567890</a></p>
            <p>Visit: 123 Example Street, Norwich, UK</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Your full-width Footer component */}
    </>
  );
};

export default Contact;