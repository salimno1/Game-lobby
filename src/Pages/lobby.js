import React, { useState } from "react";
import Sidebar from "../components/navbar";
import ReactAudioPlayer from "react-audio-player";
import sound from "../mp3/sound2.mp3";
import Info from "../components/info";
import Background from "../components/story";
import { avatars } from "./avatar";
import Addbtn from "../components/addbutton";

const Lobby = () => {
  const [addSoldier, setAddSoldier] = useState();
  const [sideBarState, setSideBarState] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  console.log(selectedCharacter);
  const soldier =
    selectedCharacter && avatars.find((item) => item.id == selectedCharacter);

  const showInfoBar = () => {
    if (sideBarState === 1) {
      return (
        <div className="info">
          <Info avatars={avatars} selectAvatar={setSelectedCharacter} />
          <Background selectedSoldier={selectedCharacter} avatars={avatars} />
        </div>
      );
    } else if (sideBarState === 2) {
      return <div className="info">vapen</div>;
    } else {
      return <div className="info">map</div>;
    }
  };
  return (
    <div className="container">
      <div className="header"></div>
      <div className="sidebar">
        <Sidebar onClick={setSideBarState} />
      </div>

      {showInfoBar()}

      <div className="footer"></div>
      <ReactAudioPlayer src={sound} autoPlay loop volume={0.5} />
    </div>
  );
};

export default Lobby;
