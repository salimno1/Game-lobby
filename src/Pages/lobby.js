import React from "react";
import Sidebar from "../components/navbar";
const Lobby = () => {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="info"></div>
      <div className="section1"></div>
      <div className="footer"></div>
    </div>
  );
};

export default Lobby;
