import React from 'react';
import Photo from './Photo.js';

const Photos = ({photos}) => {
  return (
    <ul className="photo-grid">
      {photos.map(photo => {
        return (
          <Photo photo={photo} />
        );
      })}
    </ul>
  );
}

export default Photos;