import React from "react";
import c3 from "../img/c3.gif";
const Background = (props) => {
  const { selectedSoldier, avatars } = props;
  const soldier = avatars.find((avatar) => {
    return avatar.id == selectedSoldier;
  });

  return (
    <div className="story">
      <div className="soldierPic">
        <img className="bodyPic" src={soldier.image} alt="" />
      </div>
      <div className="soldierText">
        <h2>{soldier.name}</h2>
        <h5>Country: </h5>
        <p>{soldier.country}</p>
        <h5>Perk: </h5>
        <p>{soldier.skill}</p>
      </div>
    </div>
  );
};

export default Background;
