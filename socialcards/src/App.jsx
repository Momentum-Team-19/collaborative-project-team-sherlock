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

  return (
    <>
      <h1>Social Card</h1>
      <Routes>
        <Route path='/' element={<Gallery token={token} />} />
        <Route path='/card/:id' element={<ShowCard />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/cardmaker' element={<CardMaker />} />
        <Route path='/showcard' element={<ShowCard token={token} />} />
      </Routes>
      <Link to={{ pathname: "/login" }} className='sub-page-link'>
        Login
      </Link>
      <Link to={{ pathname: "/cardmaker" }} className='sub-page-link'>
        Card Maker
      </Link>
      <Link to={{ pathname: "/showcard" }} className='sub-page-link'>
        Show Card
      </Link>
    </>
  );
}

export default App;
