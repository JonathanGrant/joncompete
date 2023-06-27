import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
      {images.map((image, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img src={image.src} alt={image.caption} style={{ width: '100%' }} />
          <p style={{ fontSize: '14px' }}>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export { ImageGallery };
