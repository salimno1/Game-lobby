import "./App.css";
import { useState } from "react";

import RegisterInput from "./Pages/registration";
import LoginInput from "./Pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./Pages/lobby";

function App() {
  const adminUser = {};
  const [user, setUser] = useState({ name: "" });

  const login = (details) => {
    console.log(adminUser);
    console.log(details);
    if (
      details.name == adminUser.name &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({ name: details.name });
    } else {
      console.log("wrong password");
    }
  };

  const Logout = () => {
    console.log("logout");
  };
  return (
    <div className="App">
      {
        <Routes>
          <Route path="lobby" element={<Lobby />} />
          <Route
            path="/"
            element={<LoginInput login={login} admin={adminUser} />}
          />
          <Route
            path="signUp"
            element={<RegisterInput login={login} admin={adminUser} />}
          />
        </Routes>
      }
    </div>
  );
}

export default App;
