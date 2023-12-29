// Photo.js
import React from 'react';

import styled from 'styled-components';

const PhotoContainer = styled.div`
  margin: 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PhotoImage = styled.img`
  width: 312px;
  height: 464px;
  grid-row: span 2 / auto;
  border-radius: 5px;
`;

const Photo = ({ src, alt }) => {
  return (
    <PhotoContainer>
      <PhotoImage src={src} alt={alt} />
    </PhotoContainer>
  );
};

export default Photo;
