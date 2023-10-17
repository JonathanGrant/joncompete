import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
      {images.map((image, index) => (
        <a key={index} style={{ textAlign: 'center' }} href={image.src} target="_blank">
          <img src={image.src} alt={image.caption} loading="lazy" style={{ width: '100%' }} />
          <p style={{ fontSize: '14px' }}>{image.caption}</p>
        </a>
      ))}
    </div>
  );
};

export { ImageGallery };
