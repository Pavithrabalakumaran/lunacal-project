// src/components/Gallery.js
import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: white;
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddImageButton = styled.button`
  background-color: #555;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

const Gallery = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ]);

  const addImage = () => {
    const newImage = 'https://via.placeholder.com/100';
    setImages([...images, newImage]);
  };

  return (
    <GalleryContainer>
      <GalleryHeader>
        <h2>Gallery</h2>
        <AddImageButton onClick={addImage}>+ Add Image</AddImageButton>
      </GalleryHeader>
      <ImagesContainer>
        {images.map((image, index) => (
          <ImageItem key={index} src={image} alt={`Gallery item ${index}`} />
        ))}
      </ImagesContainer>
    </GalleryContainer>
  );
};

export default Gallery;
