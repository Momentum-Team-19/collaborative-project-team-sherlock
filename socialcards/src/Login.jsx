import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginUrl = "https://social-cards.fly.dev/api/auth/token/login/";
    console.log("submitClick", username, password);

    // setToken("Happy Birthday");

    axios
      .post(loginUrl, {
        username: username,
        password: password,
      })
      .then((res) => {
        setToken(res.data.auth_token);
        navigate("/");
      });
  };

  return (
    <div className="loginbox">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='username-input'>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            name='username'
            id='username'
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className='password-input'>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            name='password'
            id='password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
