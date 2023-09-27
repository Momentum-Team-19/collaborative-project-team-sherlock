import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const CardMaker = ({ token }) => {
  // Setting state for the preview blocks
  const [coverBackgroundColor, setCoverBackgroundColor] = useState("#ffffff");
  const [coverText, setCoverText] = useState("");
  const [textOrientation, setTextOrientation] = useState("center");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [insideBackgroundColor, setInsideBackgroundColor] = useState("#ffffff");
  const [insideText, setInsideText] = useState("");
  const [insideTextOrientation, setInsideTextOrientation] = useState("center");
  const [insideSelectedFont, setInsideSelectedFont] = useState("Arial");
  const [coverBorderColor, setCoverBorderColor] = useState("#000000");
  const [coverBorderWidth, setCoverBorderWidth] = useState("0px");
  const [insideBorderColor, setInsideBorderColor] = useState("#000000");
  const [insideBorderWidth, setInsideBorderWidth] = useState("0px");
  const [mirrorBackgroundColor, setMirrorBackgroundColor] = useState(false);
  const [mirrorBorder, setMirrorBorder] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [coverBorderStyle, setCoverBorderStyle] = useState("solid");
  const [insideBorderStyle, setInsideBorderStyle] = useState("solid");
  const [results, setResults] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [coverTextColor, setCoverTextColor] = useState("#000000");
  const [addTextShadow, setAddTextShadow] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const borderStyles = [
    "solid",
    "dotted",
    "dashed",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
  ];

  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://social-cards.fly.dev/api/cards/",
        {
          front_text: coverText,
          back_text: insideText,
          imageURL: selectedImage,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        return axios
          .request({
            url: `https://social-cards.fly.dev/api/cards/${res.data.id}/styles/`,
            method: "POST",
            headers: {
              Authorization: `Token ${token}`,
            },
            data: [
              {
                property: "backgroundColor",
                value: coverBackgroundColor,
              },
              {
                property: "fontFamily",
                value: selectedFont,
              },
              {
                property: "textAlign",
                value: textOrientation,
              },
              {
                property: "color",
                value: coverTextColor,
              },
              {
                property: "textShadow",
                value: addTextShadow,
              },
              {
                property: "border",
                value: `${coverBorderWidth} ${coverBorderColor} ${coverBorderStyle}`,
              },
            ],
          })

          .then((res) => {
            navigate("/");
          })
          .catch((error) => {
            if (error) {
              setErrorMessage(error);
              console.log("error: ", error);
            }
          });
      });
  };

  useEffect(() => {
    // When results are available, show the search results box
    setShowSearchResults(results.length > 0);
  }, [results]);

  // cover preview handlers
  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
    setMirrorBackgroundColor(false);
    setInsideBackgroundColor("ffffff");
  };

  const handleClearSearch = () => {
    setResults([]);
    setShowSearchResults(false);
  };

  const handleCoverTextColorChange = (event) => {
    setCoverTextColor(event.target.value);
  };

  const handleTextShadowChange = (event) => {
    if (event.target.checked) {
      setAddTextShadow("true");
    } else {
      setAddTextShadow("");
    }
  };

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

  const handleCoverBorderColorChange = (event) => {
    setCoverBorderColor(event.target.value);
  };

  const handleCoverBorderWidthChange = (event) => {
    setCoverBorderWidth(event.target.value + "px");
  };

  const handleCoverBorderStyleChange = (event) => {
    setCoverBorderStyle(event.target.value);
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

  const handleInsideBorderColorChange = (event) => {
    setInsideBorderColor(event.target.value);
  };

  const handleInsideBorderWidthChange = (event) => {
    setInsideBorderWidth(event.target.value + "px");
  };

  const handleInsideBorderStyleChange = (event) => {
    setInsideBorderStyle(event.target.value);
  };

  const handleMirrorBackgroundColorChange = (event) => {
    setMirrorBackgroundColor(event.target.checked);
    if (event.target.checked) {
      setInsideBackgroundColor(coverBackgroundColor);
    } else {
      setInsideBackgroundColor("#ffffff");
    }
  };

  const handleMirrorBorderChange = (event) => {
    setMirrorBorder(event.target.checked);
    if (event.target.checked) {
      setInsideBorderColor(coverBorderColor);
      setInsideBorderWidth(coverBorderWidth);
      setInsideBorderStyle(coverBorderStyle);
    } else {
      setInsideBorderColor("#000000");
      setInsideBorderWidth("0px");
      setInsideBorderStyle("");
    }
  };

  const handleDraftChange = (event) => {
    setIsDraft(event.target.checked);
  };

  return (
    <>
      <div className='CMPage-header'>CardMaker</div>

      <div className='maker-container'>
        <div className='options-container'>
          {!selectedImage && (
            <div className='single-option-container'>
              <label htmlFor='coverBackgroundColor'>
                Choose your cover background color:
              </label>
              <input
                type='color'
                id='coverBackgroundColor'
                name='coverBackgroundColor'
                value={coverBackgroundColor}
                onChange={handleCoverBackgroundColorChange}
              />
            </div>
          )}

          <div className='single-option-container'>
            <label htmlFor='coverText'>Add cover text here: </label>
            <input
              required
              type='text'
              id='coverText'
              name='coverText'
              value={coverText}
              onChange={handleCoverTextChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='coverTextColor'>Choose cover text color: </label>
            <input
              type='color'
              id='coverTextColor'
              name='coverTextColor'
              value={coverTextColor}
              onChange={handleCoverTextColorChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='addTextShadow'>Add text shadow: </label>
            <input
              type='checkbox'
              id='addTextShadow'
              name='addTextShadow'
              checked={addTextShadow ? true : false}
              onChange={handleTextShadowChange}
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
            <SearchBar setResults={setResults} results={results} />
          </div>

          {results.length > 0 && (
            <div
              className='search-results-box'
              style={{ display: showSearchResults ? "block" : "none" }}
            >
              <button className='clear-search' onClick={handleClearSearch}>
                Exit
              </button>
              <div className='image-results'>
                {results.map((result) => (
                  <div
                    key={result.id}
                    className='image-container'
                    style={{
                      backgroundSize: "cover",
                      width: "300px",
                      height: "300px",
                    }}
                    onClick={() => handleImageClick(result.urls.small)}
                  >
                    <img
                      className='mapped-image image-preview cover-preview'
                      src={result.urls.small}
                      alt={result.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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

          <div className='single-option-container'>
            <label htmlFor='coverBorderColor'>
              Choose a color, then choose a border thickness to make an inside
              border:{" "}
            </label>
            <input
              type='color'
              id='coverBorderColor'
              name='coverBorderColor'
              value={coverBorderColor}
              onChange={handleCoverBorderColorChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='coverBorderWidth'></label>
            <input
              type='number'
              id='coverBorderWidth'
              name='coverBorderWidth'
              value={parseInt(coverBorderWidth)}
              onChange={handleCoverBorderWidthChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='coverBorderStyle'>Choose cover border style:</label>
            <select
              id='coverBorderStyle'
              name='coverBorderStyle'
              value={coverBorderStyle}
              onChange={handleCoverBorderStyleChange}
            >
              {borderStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          {/* COVER -> INSIDE POINT */}

          <div className='single-option-container'>
            <label htmlFor='insideBackgroundColor'>
              Choose inside background color:
            </label>
            <input
              type='color'
              id='insideBackgroundColor'
              name='insideBackgroundColor'
              value={insideBackgroundColor}
              onChange={handleInsideBackgroundColorChange}
            />
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
          <div className='single-option-container'>
            <label htmlFor='insideBorderColor'>
              Choose a color, then choose a border thickness to make an inside
              border:{" "}
            </label>
            <input
              type='color'
              id='insideBorderColor'
              name='insideBorderColor'
              value={insideBorderColor}
              onChange={handleInsideBorderColorChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='insideBorderWidth'></label>
            <input
              type='number'
              id='insideBorderWidth'
              name='insideBorderWidth'
              value={parseInt(insideBorderWidth)}
              onChange={handleInsideBorderWidthChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='insideBorderStyle'>
              Choose inside border style:
            </label>
            <select
              id='insideBorderStyle'
              name='insideBorderStyle'
              value={insideBorderStyle}
              onChange={handleInsideBorderStyleChange}
            >
              {borderStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>

          <div className='single-option-container'>
            <label htmlFor='mirrorBackgroundColor'>
              Mirror Background Color:
            </label>
            <input
              type='checkbox'
              id='mirrorBackgroundColor'
              name='mirrorBackgroundColor'
              checked={mirrorBackgroundColor}
              onChange={handleMirrorBackgroundColorChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='mirrorBorder'>Mirror Border:</label>
            <input
              type='checkbox'
              id='mirrorBorder'
              name='mirrorBorder'
              checked={mirrorBorder}
              onChange={handleMirrorBorderChange}
            />
          </div>

          <div className='single-option-container'>
            <label htmlFor='isDraft'>Mark as a Draft: </label>
            <input
              type='checkbox'
              id='isDraft'
              name='isDraft'
              checked={isDraft}
              onChange={handleDraftChange}
            />
          </div>

          {/* OPTIONS TO PREVIEW SWAP POINT */}
          <button onClick={handleSubmit}>Submit</button>

          {errorMessage && <div>{error}</div>}
        </div>
        <div className='preview-container'>
          <h3>Cover Preview</h3>
          <div
            className='cover-preview'
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: "cover",
              backgroundColor: coverBackgroundColor,
              textAlign: textOrientation,
              fontFamily: selectedFont,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: coverTextColor,
              textShadow: addTextShadow ? "2px 2px 2px #000000" : "none",
              border: `${coverBorderWidth} ${coverBorderStyle} ${coverBorderColor}`,
            }}
          >
            <h2>{coverText}</h2>
          </div>
          <h3>Inside Preview</h3>
          <div
            className='inside-preview'
            style={{
              backgroundColor: insideBackgroundColor,
              textAlign: insideTextOrientation,
              fontFamily: insideSelectedFont,
              border: `${insideBorderWidth} ${insideBorderStyle} ${insideBorderColor}`,
            }}
          >
            <h2>{insideText}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMaker;
