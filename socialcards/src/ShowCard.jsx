import { useEffect, useState } from "react";
import axios from "axios";

const ShowCard = () => {
    const [frontText, setFrontText] = useState('')
    const [backText, setBackText] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')
    const [font, setFont] = useState('')
    useEffect(() => {
        axios
            .get('https://social-cards.fly.dev/api/cards/4/',
            )
            .then((response) => {
                setFrontText(response.data.front_text);
                setBackText(response.data.back_text)
                setImageURL(response.data.imageURL)
                setBackgroundColor(response.data.background_color)
                setFont(response.data.font)
            }

            )
    }, []
    )
    return (
        <>
            <div>
                <div>
                    <img href={imageURL}>
                    </img>
                    <div>
                        {frontText}
                    </div>
                    <div>
                        {backText}
                    </div>
                    <div>
                        {font}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowCard;

// ${id} for .get `` instead of ''
// 2 parent divs. 1 with 3 divs other with 4 divs. 2nd parent div doesnt show anything until "click to see caption" is clicked
// 3 divs
// A way to capture username for 1st div
// Showing imageURL for 2nd div
// click to see caption 3rd div with onclick function (inside a ternary statement) 
// edit card