import React from "react";
import c3 from "../img/c3.gif";
const Background = (props) => {
  const { selectedSoldier, confirm } = props;

  if (!selectedSoldier) {
    return null;
  }

  return (
    <div className="story">
      <div className="soldierPic">
        <img className="bodyPic" src={selectedSoldier.image} alt="" />
      </div>
      <div className="soldierText">
        <h2>{selectedSoldier.name}</h2>
        <h5>Country: </h5>
        <p>{selectedSoldier.country}</p>
        <h5>Perk: </h5>
        <p>{selectedSoldier.skill}</p>
      </div>
      <button onClick={() => confirm(selectedSoldier)}>Click</button>
    </div>
  );
};

export default Background;
