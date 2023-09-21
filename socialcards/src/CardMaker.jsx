import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CardMaker = () => {
  // Setting state for the cover background
  const [coverBackgroundColor, setCoverBackgroundColor] = useState("#ffffff");
  const [coverText, setCoverText] = useState("");
  const [textOrientation, setTextOrientation] = useState("center");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [insideBackgroundColor, setInsideBackgroundColor] = useState("#ffffff");
  const [insideText, setInsideText] = useState("");
  const [insideTextOrientation, setInsideTextOrientation] = useState("center");
  const [insideSelectedFont, setInsideSelectedFont] = useState("Arial");

  // cover-preview handlers
  const handleCoverBackgroundColorChange = (event) => {
    setCoverBackgroundColor(event.target.value);
  };

  const handleCoverTextChange = (event) => {
    setCoverText(event.target.value);
  };

  const handleTextOrientationChange = (event) => {
    setTextOrientation(event.target.value);
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  // inside-preview handlers
  const handleInsideBackgroundColorChange = (event) => {
    setInsideBackgroundColor(event.target.value);
  };

  const handleInsideTextChange = (event) => {
    setInsideText(event.target.value);
  };

  const handleInsideTextOrientationChange = (event) => {
    setInsideTextOrientation(event.target.value);
  };

  const handleInsideFontChange = (event) => {
    setInsideSelectedFont(event.target.value);
  };

  return (
    <>
      <div className='CMPage-header'>CardMaker</div>
      <div className='maker-container'>
        <div className='options-container'>
          <div className='single-option-container'>
            <label htmlFor='coverBackgroundColor'>
              Choose your cover background color:
            </label>
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
          </div>

          <div className='single-option-container'>
            <label htmlFor='coverText'>Add cover text here: </label>
            <input
              type='text'
              id='coverText'
              name='coverText'
              value={coverText}
              onChange={handleCoverTextChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='textOrientation'>Choose text orientation: </label>
            <select
              id='textOrientation'
              name='textOrientation'
              value={textOrientation}
              onChange={handleTextOrientationChange}
            >
              <option value='left'>Left</option>
              <option value='center'>Center</option>
              <option value='right'>Right</option>
            </select>
          </div>

          <div className='single-option-container'>
            <label htmlFor='selectedFont'>Choose a font: </label>
            <select
              id='selectedFont'
              name='selectedFont'
              value={selectedFont}
              onChange={handleFontChange}
            >
              <option value='Arial'>Arial</option>
              <option value='Times New Roman'>Times New Roman</option>
              <option value='Verdana'>Verdana</option>
              <option value='Courier New'>Courier New</option>
            </select>
          </div>
          {/* COPY POINT */}
          <div className='single-option-container'>
            <label htmlFor='insideBackgroundColor'>
              Choose inside background color:
            </label>
            <select
              id='insideBackgroundColor'
              name='insideBackgroundColor'
              value={insideBackgroundColor}
              onChange={handleInsideBackgroundColorChange}
            >
              <option value='#ffffff'>White</option>
              <option value='#ff0000'>Red</option>
              <option value='#00ff00'>Green</option>
              <option value='#0000ff'>Blue</option>
            </select>
          </div>

          <div className='single-option-container'>
            <label htmlFor='insideText'>Add inside text here: </label>
            <input
              type='text'
              id='insideText'
              name='insideText'
              value={insideText}
              onChange={handleInsideTextChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='insideTextOrientation'>
              Choose inside text orientation:{" "}
            </label>
            <select
              id='insideTextOrientation'
              name='insideTextOrientation'
              value={insideTextOrientation}
              onChange={handleInsideTextOrientationChange}
            >
              <option value='left'>Left</option>
              <option value='center'>Center</option>
              <option value='right'>Right</option>
            </select>
          </div>

          <div className='single-option-container'>
            <label htmlFor='insideSelectedFont'>Choose inside font: </label>
            <select
              id='insideSelectedFont'
              name='insideSelectedFont'
              value={insideSelectedFont}
              onChange={handleInsideFontChange}
            >
              <option value='Arial'>Arial</option>
              <option value='Times New Roman'>Times New Roman</option>
              <option value='Verdana'>Verdana</option>
              <option value='Courier New'>Courier New</option>
            </select>
          </div>
        </div>

        <div className='preview-container'>
          <div
            className='cover-preview'
            style={{
              backgroundColor: coverBackgroundColor,
              textAlign: textOrientation,
              fontFamily: selectedFont,
            }}
          >
            <h2>Box for previewing the cover.</h2>
            <h2>{coverText}</h2>
          </div>
          <div
            className='inside-preview'
            style={{
              backgroundColor: insideBackgroundColor,
              textAlign: insideTextOrientation,
              fontFamily: insideSelectedFont,
            }}
          >
            <h2>Box for previewing the inside of the card.</h2>
            <h2>{insideText}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMaker;
