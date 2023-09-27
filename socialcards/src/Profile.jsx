import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ token }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios
      .get('https://social-cards.fly.dev/api/cards/me', {
        headers: { Authorization: `Token ${token}` }
      })
      .then((response) => {
        setCards(response.data);
      })
  }, [token]);

  const createStyleObject = (styles, imageURL) => {
    console.log("creating style object")
    console.log("Here are the styles for a card ", styles)
    // make a new object using dynamic keys and values from the passed in styles
    const styleObj = {}
    styles.forEach(style => styleObj[style.property] = style.value)
    styleObj['backgroundImage'] = `url(${imageURL})`
    console.log("Here is the new style object: ", styleObj)
    return styleObj
  }

  console.log(cards)

  return (
    <div className="galleryBox">
      <h2>My Cards</h2>
      {/* {cards ? <h2>{cards[0].creator}'s cards</h2> : null} */}
      {cards &&
      cards.map((card, index) => (
        <Link to={{pathname:  `/card/${card.id}`}} key={index}>
        <div className="gallery-preview" key={card.id} style={createStyleObject(card.styles, card.imageURL)}>
              {card.front_text}
        </div>
        </Link>
      ))}
    </div>
  );
};

export default Profile;