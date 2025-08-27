import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const Rooms = () => {
  const handleBookingClick = () => {
    // Navigate to bookingPage.html
    window.location.href = '/booking';
  };
  return (
    <div>
      <Header />
      {/* Rooms Section */}
        <section>
          <h2>ROOMS ACCOMMODATION</h2>
          <p>Designed to make you feel at home</p>
          <article className="rooms">
            <figure>
              <img className="room-img-1" src="https://www.grandhotelgardone.it/images/slide/rooms/classic/Standard-double-room_1900x900.jpg" alt="Standard Room" />
              <figcaption>
                <h2>Standard Double Room</h2>
                <p>A cozy and inviting room featuring one double bed, private bathroom, free Wi-Fi, and essential comforts for a relaxing and restful stay.</p>
              </figcaption>
            </figure>
          </article>
          <article className="rooms">
            <figure>
              <img className="room-img-2" src="https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/210/2017/11/27032018/tentrem-hotel-yogyakarta-home-image271.jpg" alt="Executive Room" />
              <figcaption>
                <h2>Standard Twin Room</h2>
                <p>A comfortable room with two separate single beds, private bathroom, free Wi-Fi, and all essential amenities for a convenient stay.</p>
              </figcaption>
            </figure>
          </article>
          <article className="rooms">
            <figure>
              <img className="room-img-3" src="https://media.licdn.com/dms/image/v2/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=wNed3iPWP-H9ny4OyvBlR_hvDo2Xlgn5Xfkuxm7KkKc" alt="Deluxe Room" />
              <figcaption>
                <h2>Superior Double Room</h2>
                <p>A spacious and elegantly furnished room with a double bed, upgraded amenities, private bathroom, and added comforts for a premium stay</p>
              </figcaption>
            </figure>
          </article>
          <article className="rooms">
            <figure>
              <img className="room-img-4" src="https://thejohnstownestate.com/wp-content/uploads/2020/10/Family-Room-_1200X800.jpg" alt="Family Room" />
              <figcaption>
                <h2>Superior Twin Room</h2>
                <p>A stylish and spacious room with two single beds, enhanced amenities, private bathroom, and extra comforts for an elevated stay</p>
              </figcaption>
            </figure>
          </article>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button onClick={handleBookingClick} id="bookingButton">
            Book Now
          </button>
        </div>
        </section>
        <Footer/>
        </div>
  )
}
export default Rooms;