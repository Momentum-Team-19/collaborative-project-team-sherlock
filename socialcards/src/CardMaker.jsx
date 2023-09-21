import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CardMaker = () => {
  // Setting state for the cover background
  const [coverBackgroundColor, setCoverBackgroundColor] = useState("#ffffff");

  const handleCoverBackgroundColorChange = (event) => {
    setCoverBackgroundColor(event.target.value);
  };

  return (
    <>
      <div>CardMaker</div>

      {/* Creating a dropdown */}
      <label htmlFor='coverBackgroundColor'>Cover Background Color</label>
      <select
        id='coverBackgroundColor'
        name='coverBackgroundColor'
        value={coverBackgroundColor}
        onChange={handleCoverBackgroundColorChange}
      >
        <option value='#ffffff'>White</option>
        <option value='#ff0000'>Red</option>
        <option value='#00ff00'>Green</option>
        <option value='#0000ff'>Blue</option>
      </select>

      <div
        className='cover-preview'
        style={{ backgroundColor: coverBackgroundColor }}
      >
        <h2>Box for previewing the cover.</h2>
      </div>
      <div
        className='inside-preview'
        style={{ backgroundColor: coverBackgroundColor }}
      >
        <h2>Box for previewing the inside of the card.</h2>
      </div>
    </>
  );
};

export default CardMaker;
