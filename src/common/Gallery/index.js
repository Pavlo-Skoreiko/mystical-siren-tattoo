// Gallery.js
import React from 'react';

import styled from 'styled-components';

import Photo from '../Photo';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Gallery = ({ photos }) => {
  return (
    <GalleryContainer>
      {photos.map((photo, index) => (
        <Photo key={index} src={photo.src} alt={photo.alt} />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
