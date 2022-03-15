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

const RegisterInput = ({ admin }) => {
  let navigate = useNavigate();
  const [regdetails, setRegDetails] = useState({
    name: "",
    password: "",
    password2: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(regdetails));
    setIsSubmit(true);
    admin = regdetails;
    console.log(admin);

    navigate("/");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(regdetails);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password) {
      errors.password = "Password is required!";
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
          onChange={(e) =>
            setRegDetails({ ...regdetails, email: e.target.value })
          }
          value={regdetails.email}
          required
        />
        <p>{formErrors.email}</p>

        <input
          type="text"
          name="username"
          placeholder="Username*"
          onChange={(e) =>
            setRegDetails({ ...regdetails, name: e.target.value })
          }
          value={regdetails.name}
          required
        />
        <p>{formErrors.name}</p>

        <input
          type={inputType}
          name="password"
          placeholder="Password*"
          onChange={(e) =>
            setRegDetails({ ...regdetails, password: e.target.value })
          }
          value={regdetails.password}
          required
        />
        <p>{formErrors.password}</p>

        <input
          type={inputType}
          name="password2"
          placeholder="Repeat Password*"
          onChange={(e) =>
            setRegDetails({ ...regdetails, password2: e.target.value })
          }
          value={regdetails.password2}
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
