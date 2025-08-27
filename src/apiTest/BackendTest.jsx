import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BackendTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/test-db')
      .then((res) => setData(res.data))
      .catch((err) => console.error('API Error:', err));
  }, []);

  return (
    <div>
      <h2>Test Backend Connection</h2>
      {data ? <p>Backend Time: {data.now}</p> : <p>Loading...</p>}
    </div>
  );
};

export default BackendTest;
