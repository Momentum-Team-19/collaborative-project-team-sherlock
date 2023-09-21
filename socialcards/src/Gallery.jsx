import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Gallery = ({ token }) => {
  const [results, setResults] = useState([])


  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {Authorization: `Token ${token}`},
      })
      .then((response) => {
        setResults(response.data.results)
      },
      )
  },[]

  )
  return (
    <div>
      <div className="galleryBox">
        {results.map((card) => (
          <div key={card.id} style={{backgroundColor: card.background_color}}>{card.front_text}</div>
        )

        )}
      </div>
      <button>Broken Friends</button><button>Broken Everyone</button>
      <button>Log out</button>
      {/* <div>Greeting card</div> */}
    </div>
  )
}

export default Gallery;

