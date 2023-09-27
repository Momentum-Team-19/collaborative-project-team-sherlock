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
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useLocalStorageState("Token", "");
  const isAuthenticated = token !== "";
  const { pathname } = location;

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Gallery token={token} />} />
        <Route path='/card/:cardID' element={<ShowCard token={token} />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/cardmaker' element={<CardMaker token={token} />} />
      </Routes>
      
    </>
  );
}

export default App;
