import React from "react";
import weapinPic from "../img/gunn.jpeg";
import char from "../img/char.jpeg";
import map from "../img/maps.jpeg";

const Sidebar = () => {
  return (
    <div className="sideBarFlex">
      <div className="character">
        <img className="imgChar" src={char} alt="" />
      </div>
      <div className="weapon">
        <img className="imgWeapon" src={weapinPic} alt="" />
      </div>
      <div className="map">
        <img className="imgMap" src={map} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
