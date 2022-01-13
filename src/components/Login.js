import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Something went wrong");
        }
      })
      .then((json) => console.log(json));
    setPassword("");
    setUsername("");
  };

  console.log(JSON.parse(atob("eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")));

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <div>
          <p className="text">Connectez-vous à votre compte</p>
          <form onSubmit={handleLogin}>
            <div className="username">
              <p>Username</p>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <p>Password</p>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="login">Login</button>
            </div>
          </form>
          <p className="text">
            Pas encore de compte ?{" "}
            <Link to={"/register"} onClick={() => props.setTrigger(false)}>
              {" "}
              incrivez-vous{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login;
