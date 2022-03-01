import React, { useState } from "react";
import Soundish from "../sound";
import { Link } from "react-router-dom";

const LoginInput = ({ login, error }) => {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
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
        <Link to={"lobby"}>Lobby</Link>
      </div>
    </div>
  );
};

export default LoginInput;
