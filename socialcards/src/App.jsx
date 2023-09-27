import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Gallery from "./Gallery";
import CardMaker from "./CardMaker";
import ShowCard from "./ShowCard";
import { Route, Routes, Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

function App() {
    const [count, setCount] = useState(0);
    const [token, setToken] = useLocalStorageState("Token", "");
    const isAuthenticated = token !== "";
    const { pathname } = location;

    return (
        <>
            <h1>Social Card</h1>
            <Routes>
                <Route path='/' element={<Gallery token={token} />} />
                <Route path='/card/:cardID' element={<ShowCard token={token} />} />
                <Route path='/login' element={<Login setToken={setToken} />} />
                <Route path='/cardmaker' element={<CardMaker token={token} />} />
            </Routes>
            <Link to={{ pathname: "/login" }} className='sub-page-link'>
                Login
            </Link>
            <Link to={{ pathname: "/cardmaker" }} className='sub-page-link'>
                Card Maker
            </Link>
            <Link to={{ pathname: "/card/3" }} className='sub-page-link'>
                Show Card
            </Link>
        </>
    );
}

export default App;
