import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

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

    const handleSubmit = () => {
        axios.post(
            "https://social-cards.fly.dev/api/cards/",
            {
                front_text: coverText,
            },

            {
                back_text: insideText,
            },

            {
                imageURL: null,
            },

            {
                background_color: null,
            },

            {
                font: selectedFont,
            },

            {
                draft: isDraft,
            },

            {
                headers: { Authorization: `Token ${token}` },
            }
        );
        // .then(() => {});
    };

    // cover preview handlers
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
        } else {
            setInsideBorderColor("#000000");
            setInsideBorderWidth("0px");
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

                    <div className='single-option-container'>
                        <label htmlFor='coverBorderColor'>
                            Choose a color to make a border:{" "}
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
                    {/* COPY POINT */}
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

                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className='preview-container'>
                    <div
                        className='cover-preview'
                        style={{
                            backgroundColor: coverBackgroundColor,
                            textAlign: textOrientation,
                            fontFamily: selectedFont,
                            border: `${coverBorderWidth} solid ${coverBorderColor}`,
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
                            border: `${insideBorderWidth} solid ${insideBorderColor}`,
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
