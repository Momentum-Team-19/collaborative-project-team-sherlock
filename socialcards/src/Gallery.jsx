import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Gallery = ({ token }) => {
  const [results, setResults] = useState([])
  const [currentIndex, SetCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        setResults(response.data.results)
      })
  })

  return (
    <div>
      <div className="galleryBox">
        {results.map((card) => (
          <Tilt>
            <div className="galleryCard" key={results[currentIndex].id}
            style={{backgroundColor: results[currentIndex].background_color}}>
              {results[currentIndex].front_text}
            </div>
          </Tilt>
          
        )

        )}
      </div>
      <button onClick={() => currentIndex > 0 && SetCurrentIndex(currentIndex -1)}>Previous</button>
      <button onClick={() => currentIndex < results.length -1 && SetCurrentIndex(currentIndex + 1)}>Next</button>
      <button>Broken Friends</button><button>Broken Everyone</button>
      <button>Log out</button>
      {/* <div>Greeting card</div> */}
    </div>
  )
}

export default Gallery;

// make gallery useable
// conditional statement whether you have a token or not

