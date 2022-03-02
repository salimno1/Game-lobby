import "./App.css";
import { useState } from "react";

import RegisterInput from "./Pages/registration";
import LoginInput from "./Pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./Pages/lobby";

function App() {
  const adminUser = {
    email: "",
    password: "",
  };
  const [user, serUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("logout");
  };
  return (
    <div className="App">
      {
        <Routes>
          <Route path="lobby" element={<Lobby />} />
          <Route path="/" element={<LoginInput login={login} />} />
          <Route path="signUp" element={<RegisterInput login={login} />} />
        </Routes>
      }
    </div>
  );
}

export default App;
