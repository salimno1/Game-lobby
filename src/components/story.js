import React from "react";
import c3 from "../img/c3.gif";
const Background = (props) => {
  const { selectedSoldier, avatars } = props;
  const soldier =
    selectedSoldier && avatars.find((item) => item.id == selectedSoldier);
  return (
    <div className="story">
      <div className="soldierPic">
        <img className="bodyPic" src={soldier && soldier.image} alt="" />
      </div>
      <div className="soldierText">
        {" "}
        <h3>{soldier.name}</h3>
        <h4>speciality:{soldier.speciality}</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        suscipit qui quos, voluptates est fuga quam! Minima doloremque, tempori
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga labore
      </div>
    </div>
  );
};

export default Background;
