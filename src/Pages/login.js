import React from "react";

const LoginInput = () => {
  return (
    <div className="register-form">
      <h3>Login</h3>
      <form>
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />

        <input type="password" name="password" placeholder="Password" />
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
