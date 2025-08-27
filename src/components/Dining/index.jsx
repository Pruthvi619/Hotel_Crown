import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const Dining = () => {
  return (
    <>
      <Header />
      <main>
        <section className="dining-section">
          {/* Fine Dining */}
          <div className="restaurant-block">
            <img
              className="restaurant-image"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
              alt="Fine Dining"
            />
            <div className="restaurant-content">
              <div className="restaurant-text">
                <h2>The Crown Fine Dining</h2>
                <p>
                  Step into elegance and sophistication at The Crown Fine Dining.
                  Our luxury dining room offers an intimate ambiance, crystal chandeliers,
                  fine linens, and personalized service.
                </p>
                <ul>
                  <li>Exclusive tasting menus curated by award-winning chefs.</li>
                  <li>Premium wine and champagne selections.</li>
                  <li>Private dining rooms available for VIP guests.</li>
                  <li>Live classical music performances on select evenings.</li>
                </ul>
              </div>
              <div className="menu-card">
                <h3>Fine Dining Menu</h3>
                <a href="/Assets/menu4.jpg" target="_blank" rel="noopener noreferrer">
                  <img src="/Assets/menu4.jpg" alt="Fine Dining Menu" />
                </a>
              </div>
            </div>
          </div>

          {/* Bistro */}
          <div className="restaurant-block">
            <img
              className="restaurant-image"
              src="https://www.fsrmagazine.com/wp-content/uploads/2023/10/Restaurant-2.jpg"
              alt="The Crown Bistro"
            />
            <div className="restaurant-content">
              <div className="restaurant-text">
                <h2>The Crown Bistro</h2>
                <p>
                  Relax and unwind at The Crown Bistro, our vibrant casual dining option.
                  Enjoy hearty British favourites and international comfort food.
                </p>
                <ul>
                  <li>Spacious dining area with modern décor and cosy seating.</li>
                  <li>Affordable meals perfect for families and travellers.</li>
                  <li>Children’s menu and vegetarian options available.</li>
                  <li>Friendly staff dedicated to excellent service.</li>
                </ul>
              </div>
              <div className="menu-card">
                <h3>Bistro Menu</h3>
                <a href="/Assets/menu6.jpg" target="_blank" rel="noopener noreferrer">
                  <img src="/Assets/menu6.jpg" alt="Bistro Menu" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dining;
