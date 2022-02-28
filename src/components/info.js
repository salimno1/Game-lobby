import React from "react";
import OneCharacter from "./Characters";
import Sidebar from "./navbar";
const Info = (props) => {
  const { avatars, selectAvatar } = props;

  const avatarList = avatars.map((avatar) => (
    <OneCharacter
      image={avatar.image}
      name={avatar.name}
      onClick={() => selectAvatar(avatar.id)}
      select={selectAvatar}
      id={avatar.id}
    />
  ));
  return <div className="infoContent">{avatarList}</div>;
};

export default Info;
