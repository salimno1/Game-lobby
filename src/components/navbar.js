import React from "react";
import weapinPic from "../img/gunn.jpeg";
import char from "../img/char.jpeg";
import map from "../img/maps.jpeg";

const Sidebar = (props) => {
  const { salimovic } = props;

  return (
    <div className="sideBarFlex">
      <div className="character" onClick={() => salimovic(1)}>
        <img className="imgChar" src={char} alt="" />
      </div>
      <div className="weapon" onClick={() => salimovic(2)}>
        <img className="imgWeapon" src={weapinPic} alt="" />
      </div>
      <div className="map" onClick={() => salimovic(3)}>
        <img className="imgMap" src={map} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
