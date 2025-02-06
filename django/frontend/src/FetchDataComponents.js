// src/FetchDataComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your Django backend URL
    axios.get('http://localhost:8000/api/yourmodel/')
      .then((response) => {
        setData(response.data); // Update the state with the response data
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Django Backend</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Adjust based on your model structure
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
