import React from 'react';
import { Link } from 'react-router-dom';   // <-- import Link here
import Header from '../Header';
import Carousel from '../carousel';
import Footer from '../Footer';
import './index.css';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <main>
        {/* Rooms Section */}
        <section>
          <h2>ROOMS ACCOMMODATION</h2>
          <p>Designed to make you feel at home</p>
          
          <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="rooms">
              <figure>
                <img
                  className="room-img-1"
                  src="https://www.grandhotelgardone.it/images/slide/rooms/classic/Standard-double-room_1900x900.jpg"
                  alt="Standard Room"
                />
                <figcaption>
                  <h2>Standard Double Room</h2>
                  <p>
                    A cozy and inviting room featuring one double bed, private bathroom,
                    free Wi-Fi, and essential comforts for a relaxing and restful stay.
                  </p>
                </figcaption>
              </figure>
            </article>
          </Link>
          
          <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="rooms">
              <figure>
                <img
                  className="room-img-2"
                  src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/210/2017/11/27032018/tentrem-hotel-yogyakarta-home-image271.jpg"
                  alt="Executive Room"
                />
                <figcaption>
                  <h2>Standard Twin Room</h2>
                  <p>
                    A comfortable room with two separate single beds, private bathroom,
                    free Wi-Fi, and all essential amenities for a convenient stay.
                  </p>
                </figcaption>
              </figure>
            </article>
          </Link>
          
          <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="rooms">
              <figure>
                <img
                  className="room-img-3"
                  src="https://media.licdn.com/dms/image/v2/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=wNed3iPWP-H9ny4OyvBlR_hvDo2Xlgn5Xfkuxm7KkKc"
                  alt="Deluxe Room"
                />
                <figcaption>
                  <h2>Superior Double Room</h2>
                  <p>
                    A spacious and elegantly furnished room with a double bed, upgraded
                    amenities, private bathroom, and added comforts for a premium stay
                  </p>
                </figcaption>
              </figure>
            </article>
          </Link>
          
          <Link to="/rooms" style={{ textDecoration: 'none', color: 'inherit' }}>
            <article className="rooms">
              <figure>
                <img
                  className="room-img-4"
                  src="https://thejohnstownestate.com/wp-content/uploads/2020/10/Family-Room-_1200X800.jpg"
                  alt="Family Room"
                />
                <figcaption>
                  <h2>Superior Twin Room</h2>
                  <p>
                    A stylish and spacious room with two single beds, enhanced amenities,
                    private bathroom, and extra comforts for an elevated stay
                  </p>
                </figcaption>
              </figure>
            </article>
          </Link>
        </section>

        {/* Facilities Section - FIXED */}
        <section className="facilities">
          <h2>HOTEL FACILITIES</h2>
          <div className="facilities-grid">
            <article>
              <figure>
                <img className="facility-img-1" src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Restaurant" />
                <figcaption><h2>Restaurant</h2></figcaption>
              </figure>
            </article>
            <article>
              <figure>
                <img className="facility-img-2" src="https://www.foodandwine.com/thmb/8rtGtUmtC0KiJCDxAUXP_cfwgM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GTM-Best-US-Bars-Katana-Kitten-FT-BLOG0423-fa9f2ba9925c47abb4afb0abd25d915a.jpg" alt="Bar" />
                <figcaption><h2>Bar</h2></figcaption>
              </figure>
            </article>
            <article>
              <figure>
                <img className="facility-img-3" src="https://omo-oss-image.thefastimg.com/portal-saas/new2022071417205406509/cms/image/903d1009-961d-41d9-a07f-2074bf00ec78.jpg" alt="Conference Room" />
                <figcaption><h2>Conference Room</h2></figcaption>
              </figure>
            </article>
            <article>
              <figure>
                <img className="facility-img-4" src="https://t4.ftcdn.net/jpg/01/87/29/35/360_F_187293579_mPGjfd0YI3lAICz473ORPEPJ3rpFcPIE.jpg" alt="Spa" />
                <figcaption><h2 className='facilities-names'>Spa</h2></figcaption>
              </figure>
            </article>
          </div>
        </section>

        {/* Services Section */}
        <section>
  <h2>HOTEL SERVICES</h2>
  <p>Experiences & Amenities</p>
  
  <div id="services">  {/* single container with flex styles */}
    {[
      ['fa-utensils', 'Room Service'],
      ['fa-tshirt', 'Laundry Service'],
      ['fa-bell', 'Concierge Service'],
      ['fa-car', 'Free Parking'],
      ['fa-wifi', 'Wi-Fi Available'],
      ['fa-bus', 'Shuttle Service'],
      ['fa-gift', 'Gift Shop'],
    ].map(([icon, label], index) => (
      <article className="services" key={index}>
        <figure>
          <figcaption>
            <h2><i className={`fas ${icon}`}></i><br />{label}</h2>
          </figcaption>
        </figure>
      </article>
    ))}
  </div>
</section>

        {/* Testimonials Section */}
        <section>
          <h2>TESTIMONIALS</h2>
          {[
            ["Alex Blackhood", "The Crown Hotel is a great place to stay. The staff are friendly and the rooms are clean and comfortable. I would definitely recommend it to anyone visiting the area.", 3],
            ["Georgette Dubois", "I had a wonderful stay at The Crown Hotel. The room was spacious and the bed was very comfortable. The staff were very helpful and the food was delicious. I would definitely stay here again.", 5],
            ["Francis Adeyemi", "I stayed at The Crown Hotel for a business trip and I was very impressed with the facilities. The room was clean and comfortable and the staff were very friendly and helpful. I would definitely stay here again.", 4],
            ["Katrena Louka", "Amazing stay! Cozy rooms, friendly staff, and perfect location. Can't wait to come back!", 5]
          ].map(([name, quote, stars], index) => (
            <article className="testimonials" key={index}>
              <figure>
                <figcaption>
                  <h2>{name}</h2>
                  <p>“{quote}”</p>
                  {[...Array(stars)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </figcaption>
              </figure>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
