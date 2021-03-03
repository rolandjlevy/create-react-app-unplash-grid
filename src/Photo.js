import React from 'react';

const Photo = ({photo}) => {
  return (
    <li key={photo.id}>
      <a 
        href={photo.urls.full} 
        title={photo.alt_description || photo.id}
        target="_blank" 
        rel="noopener noreferrer" 
      >
        <img 
          src={photo.urls.regular} 
          alt={photo.alt_description || photo.id} 
        />
      </a>
    </li>
  );
}

export default Photo;