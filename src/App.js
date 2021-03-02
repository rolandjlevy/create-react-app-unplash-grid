
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

import dotenv from 'dotenv';
dotenv.config();

const { useState, useEffect, useRef } = React;
const clientId = process.env.REACT_APP_CLIENT_ID;
const baseUrl = process.env.REACT_APP_BASE_URL;

const App = () => {
  const queryInput = useRef();
  let [photos, setPhotos] = useState([]);
  let [inputValue, setInputValue] = useState('');

  const numberOfPhotos = 20;
  const url = `${baseUrl}?count=${numberOfPhotos}&client_id=${clientId}`;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = queryInput.current.value;
    const photosUrl = inputValue ? `${url}&query=${inputValue}` : url;
    // const photosUrl = query ? `${url}&query=${query}` : url;
    fetch(photosUrl)
    .then(res => res.json())
    .then(data => setPhotos(data));
  };

  return (
    <div className="box">
      <form id="unsplash" className="unsplash-form" onSubmit={handleSubmit}>
        <label htmlFor="search">Search Photos on Unsplash</label> 
        <input
          ref={queryInput}
          placeholder="Enter..."
          type="search"
          id="search"
          className="search-input"
          defaultValue=""
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

      <ul className="photo-grid">
        {photos.map(photo => {
          return (
            <li key={photo.id}>
              <a href={photo.urls.full} target="_blank">
                <img src={photo.urls.regular} />
              </a>
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default App;
