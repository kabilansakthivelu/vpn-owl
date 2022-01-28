import React from 'react';
import image1 from '../../Assets/Gallery-image-1.png';
import image2 from '../../Assets/Gallery-image-2.jpeg';
import image3 from '../../Assets/Gallery-image-3.jpeg';
import image4 from '../../Assets/Gallery-image-4.jpeg';
import image5 from '../../Assets/Gallery-image-5.jpeg';
import image6 from '../../Assets/Gallery-image-6.jpeg';
import './Gallery.css';

const Gallery = () => {

const images = [
    {id:1, url: image1},
    {id:2, url: image2},
    {id:3, url: image3},
    {id:4, url: image4},
    {id:5, url: image5},
    {id:6, url: image6}];
    
  return (
  <div className="section">
  <h1 className="sectionTitle">Gallery</h1>
  <div className="gallery">
  {images.map((item)=>{
      return (
          <div key={item.id}>
          <img src={item.url} className="image"/>
          </div>
      )
  })}
  </div>
  </div>
  );
};

export default Gallery;
