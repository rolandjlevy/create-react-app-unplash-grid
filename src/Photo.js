import React from 'react';

const Photo = ({photo}) => {
  return (
    <li key={photo.id}>
      <a 
        href={photo.urls.full} 
        target="_blank" 
        rel="noopener noreferrer" 
        alt={photo.alt_description || photo.id} 
        title={photo.alt_description || photo.id}
      >
        <img src={photo.urls.regular} />
      </a>
    </li>
  );
}

export default Photo;