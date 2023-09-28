import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Gallery = ({ token }) => {
  const [results, setResults] = useState([]);
  const [isFollowing, setIsFollowing] = useState([]);
  // const [isReversed, setIsReversed] = useState(true)
  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        setResults(response.data.results);
        // console.log(response.data.results);
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/users/followed", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log("hello", response.data.results)
        setIsFollowing(response.data.results);
      });
  }, [results, token]);

  // need to write handler handleFollow that onClick does axios post
  const handleFollow = (creatorId) => {
    const followedUserId = parseInt(creatorId);

    // console.log("followedUserId:", followedUserId);
    // console.log("results.creator_id:", results.creator_id);
    // console.log("results: ", results);

    axios
      .post(
        "https://social-cards.fly.dev/api/follows/",
        {
          status: 1,
          followed_user: followedUserId,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      )
      .then((res) => {
        console.log("Response:", res.data);
        navigate("/");
      });
  };

  const handleUnfollow = (creatorId) => {
    const followedUserId = parseInt(creatorId);

    // console.log("followedUserId:", followedUserId);
    // console.log("results.creator_id:", results.creator_id);
    // console.log("results: ", results);

    axios
      .delete(`https://social-cards.fly.dev/api/unfollow/${creatorId}`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((res) => {
        navigate("/");
      });
  };

  const createStyleObject = (styles, imageURL) => {
    // console.log("creating style object");
    // console.log("Here are the styles for a card ", styles);
    // make a new object using dynamic keys and values from the passed in styles
    const styleObj = {};
    styles.forEach((style) => (styleObj[style.property] = style.value));
    styleObj["backgroundImage"] = `url(${imageURL})`;
    // console.log("Here is the new style object: ", styleObj);
    return styleObj;
  };

  const isUserFollowing = (creatorId) => {
    return isFollowing.some((user) => user.id ===creatorId)
  }

  return (
    <div>
      <div className='galleryBox'>
        {results &&
          results
            .slice()
            .reverse()
            .map((card, index) => (
              <Tilt key={index}>
                <div className='creator'>
                  created by: {card.creator}
                  {!isUserFollowing(card.creator_id) ? (

                  
                  <button
                    onClick={() => handleFollow(card.creator_id)}
                    className='follow-button'
                  >
                    Follow
                  </button>
                  ): (
                  <button
                    onClick={() => handleUnfollow(card.creator_id)}
                    className='unfollow-button'
                  >
                    Unfollow
                  </button>
                  )}
                </div>
                <Link to={{ pathname: `/card/${card.id}` }}>
                  <div
                    className='gallery-preview'
                    key={card.id}
                    style={createStyleObject(card.styles, card.imageURL)}
                  >
                    {card.front_text}
                  </div>
                </Link>
              </Tilt>
            ))}
      </div>
    </div>
  );
};
export default Gallery;
// make gallery useable
// conditional statement whether you have a token or not

// get it to how I want it to work
// commit it and make a pull request
