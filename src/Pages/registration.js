import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterInput = ({ login, error }) => {
  const [details, setDetails] = useState({
    name: "",
    password: "",
    password2: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  const [visible, setVisibility] = useState(false);

  const inputType = visible ? "text" : "password";
  return (
    <div className="register-form">
      <form onSubmit={submitHandler} autoComplete="off">
        <input
          type="text"
          name="email"
          placeholder="Email*"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          required
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username*"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          required
        />
        <br />

        <input
          type={inputType}
          name="password"
          placeholder="Password*"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          required
        />
        <br />
        <input
          type={inputType}
          name="password2"
          placeholder="Repeat Password*"
          onChange={(e) =>
            setDetails({ ...details, password2: e.target.value })
          }
          value={details.password2}
        />
        <br />
        <span
          className="password-icon2"
          onClick={() => setVisibility(!visible)}
        >
          {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>

        <input className="registerBtn" type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default RegisterInput;
