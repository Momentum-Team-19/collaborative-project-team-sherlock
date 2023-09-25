import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Gallery from "./Gallery";
import CardMaker from "./CardMaker";
import ShowCard from "./ShowCard";
import { Route, Routes, Link } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);
    const [token, setToken] = useState("");
    const isAuthenticated = token.length !== 0;
    const { pathname } = location;
    console.log("isAuthenticated", isAuthenticated);

    return (
        <>
            <h1>Social Card</h1>
            <Routes>
                <Route path='/' element={<Gallery />} />
                <Route path='/card/:id' element={<ShowCard />} />
                <Route path='/login' element={<Login setToken={setToken} />} />
                <Route path='/cardmaker' element={<CardMaker />} />
            </Routes>
            <Link to={{ pathname: "/login" }} className='sub-page-link'>
                Login
            </Link>
            <Link to={{ pathname: "/cardmaker" }} className='sub-page-link'>
                Card Maker
            </Link>
        </>
    );
}

export default App;
