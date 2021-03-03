
import * as React from 'react';
import Photos from './Photos.js';
import './App.css';

import dotenv from 'dotenv';
dotenv.config();

const { useState, useEffect } = React;
const clientId = process.env.REACT_APP_CLIENT_ID;
const baseUrl = process.env.REACT_APP_BASE_URL;

const App = () => {
  let [photos, setPhotos] = useState([]);
  let [inputValue, setInputValue] = useState('');

  const numberOfPhotos = 20;
  const url = `${baseUrl}?count=${numberOfPhotos}&client_id=${clientId}`;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const photosUrl = inputValue ? `${url}&query=${inputValue}` : url;
    fetch(photosUrl)
      .then(res => res.json())
      .then(data => {
        setPhotos(data);
        console.log({data});
      });
  };

  useEffect(() => {
    console.log({url});
  });

  return (
    <div className="box">
      <form id="unsplash" className="unsplash-form" onSubmit={handleSubmit}>
        <label htmlFor="search">Search Photos on Unsplash</label>
        <input
          placeholder="Enter..."
          type="search"
          id="search"
          className="search-input"
          style={{ margin: '0 0 20px 5px' }}
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
        <button
          type="submit"
          className="submit-button"
        >Submit
        </button>
      </form>
      
      <Photos photos={photos} />
      

    </div>
  );
};

export default App;
