import React from "react";
import OneCharacter from "./Characters";
import Sidebar from "./navbar";
const Info = (props) => {
  const { avatars, selectAvatar } = props;

  const avatarList = avatars.map((avatar) => (
    <OneCharacter select={selectAvatar} oneAvatar={avatar} />
  ));
  return <div className="infoContent">{avatarList}</div>;
};

export default Info;
