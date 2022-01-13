import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [login, setLogin] = useState(false);

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
          setLogin(true);
          setLoginError(false);
          return res.json();
        } else {
          console.log("Something went wrong");
          setLoginError(true);
        }
      })
      .then((json) => console.log(json));
    setPassword("");
    setUsername("");
  };
  console.log(login);

  return props.trigger ? (
    <div className="popup">
      {login ? console.log("oui") : console.log("non")}
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
                style={{
                  border: loginError ? "1px solid red" : "1px solid black",
                }}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <p>Password</p>
              <input
                style={{
                  border: loginError ? "1px solid red" : "1px solid black",
                }}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {loginError && (
              <p className="error-login">Wrong Username or Password</p>
            )}
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
