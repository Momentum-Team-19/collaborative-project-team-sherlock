import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import Gallery from "./Gallery";
import CardMaker from "./CardMaker";

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState("");
  const isAuthenticated = token.length !== 0;
  console.log("isAuthenticated", isAuthenticated);

  return (
    <>
      <h1>Social Card</h1>

      {/* {!isAuthenticated ? <Login setToken={setToken} /> : <Gallery />}
      {!isAuthenticated ? <Login setToken={setToken} /> : <ShowCard />}
      {!isAuthenticated ? (
        <Login setToken={setToken} />
      ) : (
        <CardMaker token={token} />
      )} */}
    </>
  );
}

export default App;
