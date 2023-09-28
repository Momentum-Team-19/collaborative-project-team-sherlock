import { useEffect, useState } from "react";
// these are hooks. used for managing states
import axios from "axios";
import Tilt from "react-parallax-tilt";
import { useParams, useNavigate } from "react-router-dom";
// these are used for handling route parameters and navigation
const ShowCard = ({ token }) => {
  // a functional component that takes a token prop as an argument
  const [coverText, setCoverText] = useState('')
  const [insideText, setInsideText] = useState('');
    const [imageURL, setImageURL] = useState('')
    const [insideBackgroundColor, setInsideBackgroundColor] = useState('#ffffff')
    const [font, setFont] = useState('')
    const [styles, setStyles] = useState([])
    const { cardID } = useParams()
    // cardID represents the ID of the card being displayed
    const [creator, setCreator] = useState('')
    const navigate = useNavigate();
    // state variables are declared using 'useState' hook to store related data to the card
    // empty quotations are empty strings
    useEffect(() => {
      // inside this hook an HTTP request is made to fetch details of a card
        axios
        // axios is imported to make HTTP request to the server
            .get(`https://social-cards.fly.dev/api/cards/${cardID}/`, {
                headers: { Authorization: `Token ${token}` } }
            )
            .then((response) => {
                setCoverText(response.data.front_text);
                setInsideText(response.data.back_text)
                setImageURL(response.data.imageURL)
                setInsideBackgroundColor(response.data.background_color)
                setFont(response.data.font)
                setStyles(response.data.styles)
            }
            )
    }, [cardID, token]
    )

    const handleDeleteCard = () => {
      // this function is only called when a click happens
      if (window.confirm("Are you sure you want to delete this card?")) {
        axios
            .delete(`https://social-cards.fly.dev/api/cards/${cardID}/`, {
                headers: { Authorization: `Token ${token}` }
            })
            .then(() => {
                // Optionally, you can redirect the user to another page or take some other action after successful deletion.
                console.log("Card deleted successfully!");
                navigate('/')
            })
            .catch((error) => {
                console.error("Error deleting card:", error);
            });
    }
};

const createStyleObject = (styles, imageURL) => {
  const styleObj = {};
  styles.forEach((style) => (styleObj[style.property] = style.value));
  styleObj["backgroundImage"] = `url(${imageURL})`;
  return styleObj;
};

    return (
        <>
        <div className='showcard-container'>
        <Tilt>
            <div className='showcard-preview' style={createStyleObject(styles, imageURL)}>
              {coverText}
                    </div>
          </Tilt>
          <Tilt>
            <div className='showcard-preview' style={createStyleObject(styles, imageURL)}>
              {insideText}
                    </div>
          </Tilt>
                    <button className='delete-button' onClick={handleDeleteCard}>
                    Delete Card
                    </button>
          </div>
        </>
    )
    }
export default ShowCard;
