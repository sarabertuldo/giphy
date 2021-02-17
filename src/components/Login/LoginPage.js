import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function login() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      history.push("/search");
    }
  }
  return (
    <>
      <h1>Login</h1>
      <div className="form-container">
        <div class="input-area">
          <input
            type="text"
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          ></input>
        </div>
        <div class="input-area">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          ></input>
        </div>
        <button className="submit" onClick={() => login()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default LoginPage;
