import React, { useState } from "react";
import Soundish from "../sound";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const LoginInput = ({ admin, realAdmin }) => {
  let navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = async (e) => {
    e.preventDefault();
    const rawResponse = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: details.name,
        password: details.password,
      }),
    });
    const isLoggedIn = await rawResponse.json();

    if (isLoggedIn) {
      navigate("/lobby");
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={submitHandler} autoComplete="off">
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />

        <br />

        <br />

        <input className="registerBtn" type="submit" value="Login" />
      </form>
      <div className="regAccount">
        <p>Dont have a account?</p>
        <Link to={"signUp"}>Sign up here!</Link>
      </div>
    </div>
  );
};

export default LoginInput;
