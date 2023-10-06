import React from 'react';
import './Colors.css'; // Import the Colors.css file from the components folder

const ColorWheel = () => {
  return (
    <div className="color-wheel">
      <div className="color-segment yellow"></div>
      <div className="color-segment green"></div>
      <div className="color-segment red"></div>
      <div className="color-segment blue"></div>
      <div className="color-segment pink"></div>
      <div className="color-segment purple"></div>
      <div className="color-segment brown"></div>
      <div className="color-segment orange"></div>
      <div className="color-segment grey"></div>
      <div className="color-segment aqua"></div>
      <div className="color-segment terracotta"></div>
    </div>
  );
};

export default ColorWheel;
