import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";
const Gallery = ({ token }) => {
  const [results, setResults] = useState([])
  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        setResults(response.data.results)
      })
  }, [token])
  return (
    <div>
      <div className="galleryBox">
        {results &&
          results.map((card, index) => (
          <Tilt key={index}>
            <div className="creator">created by: {card.creator}</div>
            <Link to={{pathname:  `/card/${card.id}`}}>
            <div className="cover-preview" key={card.id} style={{
              backgroundColor: card.background_color,
              textAlign: card.textOrientation,
              border: card.coverBorderWidth
              }}>
              {card.front_text}
            </div>
            </Link>
          </Tilt>
          ))}
      </div>
      <button>Broken Friends</button><button>Broken Everyone</button>
      <button>Log out</button>
      {/* <div>Greeting card</div> */}
    </div>
  )
}
export default Gallery;
// make gallery useable
// conditional statement whether you have a token or not
