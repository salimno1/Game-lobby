import React from "react";
import Sidebar from "../components/navbar";
import ReactAudioPlayer from "react-audio-player";
import sound from "../mp3/sound2.mp3";
import Info from "../components/info";
const Lobby = () => {
  return (
    <div className="container">
      <div className="header"></div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="section1"></div>
      <div className="footer"></div>
      <ReactAudioPlayer src={sound} autoPlay loop volume={0.5} />
    </div>
  );
};

export default Lobby;
