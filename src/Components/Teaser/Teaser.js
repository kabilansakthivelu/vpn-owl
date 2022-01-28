import React from 'react';
import teaserImage from '../../Assets/Teaser-image.png';
import './Teaser.css';

const Teaser = () => {
  return (
  <div className="teaser" id="teaser">
  <img src={teaserImage} alt="" className="teaserImage"/>
  <h1 className="caption">Keeps your online activity safe, secure, and private</h1>
  </div>
  );
};

export default Teaser;
