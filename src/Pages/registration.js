import React from "react";

const RegisterInput = () => {
  return (
    <div className="register-form">
      <h3>Register New Account</h3>
      <form>
        <input type="text" name="email" placeholder="Email*" required />
        <br />
        <input type="text" name="username" placeholder="Username*" required />
        <br />

        <input
          type="password"
          name="password"
          placeholder="Password*"
          required
        />
        <br />
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password*"
        />
        <br />

        <input className="registerBtn" type="submit" />
      </form>
    </div>
  );
};

export default RegisterInput;
