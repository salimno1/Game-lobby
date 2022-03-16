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
import WeaponDetail from "../components/weaponDetail";
import StartSide from "./startSide";

const Lobby = ({ adminUser }) => {
  const [sideBarState, setSideBarState] = useState();
  const [selectedCharacter, setSelectedCharacter] = useState(avatars[0]);
  const [selectedWeapon, setSelectedWeapon] = useState(weapons[0]);
  const [confirmedCharacter, setConfirmedCharacter] = useState();
  const [confirmedWeapon, setConfirmedWeapon] = useState();

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
          <div style={{ display: "flex" }}>
            <ArsenalSite weapons={weapons} selectedWeapon={setSelectedWeapon} />
            <WeaponDetail
              selectedWeapon={selectedWeapon}
              setConfirmedWeapon={setConfirmedWeapon}
            />
          </div>
        </div>
      );
    } else if (sideBarState == 3) {
      return <div className="info">map</div>;
    } else {
      return (
        <div className="infos">
          <StartSide />
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="header"></div>
      <div className="sidebar">
        <Sidebar salimovic={setSideBarState} />
      </div>
      {showInfoBar()}
      <Footer
        selectedSoldier={confirmedCharacter}
        confirmedWeapon={confirmedWeapon}
        adminUser={adminUser}
      />{" "}
      <ReactAudioPlayer src={sound} autoPlay loop volume={0.1} />
    </div>
  );
};

export default Lobby;
