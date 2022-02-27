import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
const RegisterInput = () => {
  const [visible, setVisibility] = useState(false);
  const icon = <AiFillEye />;
  const inputType = visible ? "text" : "password";
  return (
    <div className="register-form">
      <h3>Register New Account</h3>
      <form>
        <input type="text" name="email" placeholder="Email*" required />
        <br />
        <input type="text" name="username" placeholder="Username*" required />
        <br />

        <input
          type={inputType}
          name="password"
          placeholder="Password*"
          required
        />
        <br />
        <input
          type={inputType}
          name="password2"
          placeholder="Repeat Password*"
        />
        <br />
        <span
          className="password-icon2"
          onClick={() => setVisibility((visibility) => !visibility)}
        >
          {icon}
        </span>

        <input className="registerBtn" type="submit" />
      </form>
    </div>
  );
};

export default RegisterInput;
