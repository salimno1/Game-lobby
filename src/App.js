import "./App.css";
import { useState } from "react";

import RegisterInput from "./Pages/registration";
import LoginInput from "./Pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./Pages/lobby";

function App() {
  const [adminUser, setAdminUser] = useState({});

  return (
    <div className="App">
      {
        <Routes>
          <Route path="lobby" element={<Lobby adminUser={adminUser} />} />
          <Route path="/" element={<LoginInput admin={adminUser} />} />
          <Route
            path="signUp"
            element={
              <RegisterInput admin={setAdminUser} realAdmin={adminUser} />
            }
          />
        </Routes>
      }
    </div>
  );
}

export default App;
