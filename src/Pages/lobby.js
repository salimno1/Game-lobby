import React, { useState } from "react";
import Sidebar from "../components/navbar";
import ReactAudioPlayer from "react-audio-player";
import sound from "../mp3/sound2.mp3";
import Info from "../components/info";
import Background from "../components/story";
import { avatars } from "./avatar";
import Addbtn from "../components/addbutton";
import Footer from "./footer";
import ArsenalSite from "./arsenal";
import { weapons } from "./weapons";

const Lobby = () => {
  const [sideBarState, setSideBarState] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedWeapon, setSelectedWeapon] = useState();
  const [confirmedCharacter, setConfirmedCharacter] = useState();

  const showInfoBar = () => {
    if (sideBarState === 1) {
      return (
        <div className="info">
          <Info avatars={avatars} selectAvatar={setSelectedCharacter} />
          <Background
            selectedSoldier={selectedCharacter}
            confirm={setConfirmedCharacter}
          />
        </div>
      );
    } else if (sideBarState === 2) {
      return (
        <div className="info">
          <ArsenalSite weapons={weapons} selectedWeapon={setSelectedWeapon} />
          <div>{selectedWeapon && selectedWeapon.accuracy}</div>
        </div>
      );
    } else {
      return <div className="info">map</div>;
    }
  };

  return (
    <div className="container">
      <div className="header"></div>
      <div className="sidebar">
        <Sidebar salimovic={setSideBarState} />
      </div>

      {showInfoBar()}

      <Footer selectedSoldier={confirmedCharacter} />
    </div>
  );
};

export default Lobby;
