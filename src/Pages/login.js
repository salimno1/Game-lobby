import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const LoginInput = () => {
  const [visible, setVisibility] = useState(false);
  const icon = <AiFillEye />;
  const inputType = visible ? "text" : "password";
  return (
    <div className="register-form">
      <h3>Login</h3>
      <form>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />

        <input type={inputType} name="password" placeholder="Password" />
        <span
          className="password-icon"
          onClick={() => setVisibility((visibility) => !visibility)}
        >
          {icon}
        </span>
        <br />

        <br />

        <input className="registerBtn" type="submit" />
      </form>
      <div className="regAccount">
        <p>Dont have a account?</p>
        <a href="/">Register here!</a>
      </div>
    </div>
  );
};

export default LoginInput;
