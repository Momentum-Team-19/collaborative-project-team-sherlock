import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const ShowCard = ({ token }) => {
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [font, setFont] = useState("");
  const { cardID } = useParams();
  useEffect(() => {
    axios
      .get(`https://social-cards.fly.dev/api/cards/${cardID}/`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        setFrontText(response.data.front_text);
        setBackText(response.data.back_text);
        setImageURL(response.data.imageURL);
        setBackgroundColor(response.data.background_color);
        setFont(response.data.font);
      });
  }, []);
  return (
    <>
      <div>
        <div>
          <img href={imageURL}></img>
          <div>{frontText}</div>
          <div>{backText}</div>
          <div>{font}</div>
        </div>
      </div>
    </>
  );
};
export default ShowCard;
