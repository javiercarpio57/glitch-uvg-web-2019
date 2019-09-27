import React from 'react';
import './Slide.css';

function Slide(props) {
  // Hola soy Rodrigo Zea, discipulo de MS
  // Jose Cifuentes :) discipulo de MS
  // holis xd
  const { imgPath } = props;
  const image = {
    backgroundImage: `url(${imgPath})`,
    width: '1000px',
    height: '385px',
    zoom: '0.8',
    margin: 'auto auto auto auto',
  };

  const { bgColor } = props;
  const bgcolor = {
    background: `#${bgColor}`,
  };

  const { txtColor } = props;
  const textColor = {
    color: `#${txtColor}`,
  };

  const textShadow = {
    color: `#${txtColor}`,
    textShadow: '0 1px 4px rgba(0,0,0,0.25)',
  };

  const { shadow, title, description } = props;
  return (
    <div className="slideContainer" style={bgcolor}>
      <h1 style={shadow ? textShadow : textColor}>{title}</h1>
      <h2 style={textColor}>{description}</h2>
      <button type="button">Add DuckDuckGo to Chrome</button>
      <div className="slideImage" style={image} />
    </div>
  );
}

export default Slide;
