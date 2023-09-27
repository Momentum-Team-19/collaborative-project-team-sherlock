import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";
const Gallery = ({ token }) => {
  const [results, setResults] = useState([])
  // const [isReversed, setIsReversed] = useState(true)
  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        setResults(response.data.results)
        console.log(response.data.results)
      })
  }, [token])
    
  const createStyleObject = (styles) => {
    console.log("creating style object")
    console.log("Here are the styles for a card ", styles)
    // make a new object using dynamic keys and values from the passed in styles
    const styleObj = {}
    styles.forEach(style => styleObj[style.property] = style.value)
    console.log("Here is the new style object: ", styleObj)
    return styleObj
  }
  
  
  return (
    <div>
      <div className="galleryBox">
        {results &&
          results.slice().reverse().map((card, index) => (
          <Tilt key={index}>
            <div className="creator">created by: {card.creator}</div>
            <Link to={{pathname:  `/card/${card.id}`}}>
            {/* <div className="cover-preview" key={card.id} style={{
              font: card.font,
              backgroundColor: card.background_color,
              textAlign: card.textOrientation,
              border: card.coverBorderWidth
              }}> */}
              <div className="gallery-preview" key={card.id} style={createStyleObject(card.styles)}>
              {card.front_text}
            </div>
            </Link>
          </Tilt>
          ))}
      </div>
    </div>
  )
}
export default Gallery;
// make gallery useable
// conditional statement whether you have a token or not

// get it to how I want it to work
// commit it and make a pull request