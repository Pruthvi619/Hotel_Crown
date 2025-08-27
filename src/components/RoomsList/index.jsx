import React from 'react';
import './index.css';

const classMap = {
  std_d: 'Standard Double Room',
  std_t: 'Standard Twin Room',
  sup_d: 'Superior Double Room',
  sup_t: 'Superior Twin Room',
};

const RoomsList = ({ rooms, onBook }) => {
  if (!rooms || rooms.length === 0) return <p>No rooms available.</p>;

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.r_no}>
            Room No: {room.r_no} — Class: {classMap[room.r_class] || room.r_class} — Status: {room.r_status}
            {onBook && (
              <button
                style={{ marginLeft: '10px' }}
                onClick={() => onBook(room.r_no)}
              >
                Book
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;
