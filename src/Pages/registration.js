import React from "react";
import { useState, useEffect } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const RegisterInput = ({ admin, realAdmin }) => {
  let navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const submitHandler = async (e) => {
    setFormErrors(validate(realAdmin));
    setIsSubmit(true);
    e.preventDefault();

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const rawResponse = await fetch("http://localhost:3001/createUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: realAdmin.name,
          email: realAdmin.email,
          password: realAdmin.password,
        }),
      });
      const isLoggedIn = await rawResponse.json();

      if (isLoggedIn) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(realAdmin);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!values.name) {
      errors.name = "Username is required!";
    } else if (!usernameRegex.test(values.name)) {
      errors.name = "username wrong";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 character.";
    }
    if (!values.password2) {
      errors.password2 = "Password is required!";
    } else if (values.password2 != values.password) {
      errors.password2 = "password do not match!";
    }
    return errors;
  };

  const [visible, setVisibility] = useState(false);

  const inputType = visible ? "text" : "password";
  return (
    <div className="register-form">
      <div></div>
      <form onSubmit={submitHandler} autoComplete="off">
        <input
          type="text"
          name="email"
          placeholder="Email*"
          onChange={(e) => admin({ ...realAdmin, email: e.target.value })}
          value={realAdmin.email}
          required
        />
        <p>{formErrors.email}</p>

        <input
          type="text"
          name="username"
          placeholder="Username*"
          onChange={(e) => admin({ ...realAdmin, name: e.target.value })}
          value={realAdmin.name}
          required
        />
        <p>{formErrors.name}</p>

        <input
          type={inputType}
          name="password"
          placeholder="Password*"
          onChange={(e) => admin({ ...realAdmin, password: e.target.value })}
          value={realAdmin.password}
          required
        />
        <p>{formErrors.password}</p>

        <input
          type={inputType}
          name="password2"
          placeholder="Repeat Password*"
          onChange={(e) => admin({ ...realAdmin, password2: e.target.value })}
          value={realAdmin.password2}
        />
        <p>{formErrors.password2}</p>

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
