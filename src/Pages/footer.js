import React, { useState } from "react";
import pPic from "../img/profilepic.gif";

const Footer = (props) => {
  const { selectedSoldier, confirmedWeapon, adminUser } = props;

  return (
    <div className="footerContainer">
      <div className="userfooter">
        <div className="profilepic">
          <img src={pPic} alt="" />
        </div>
        <div className="username">
          <h3>{adminUser.name}</h3>
          <p>Rank 45</p>
        </div>
      </div>
      <div className="selectedFooter">
        <div className="fcontainer">
          <div className="soldiermini">
            <img src={selectedSoldier && selectedSoldier.image} alt="" />
          </div>
          <div className="weaponmini">
            <img src={confirmedWeapon && confirmedWeapon.image} alt="" />
          </div>
          <div className="mapsmini"></div>
        </div>
      </div>

      <div className="gameFooter"></div>
    </div>
  );
};

export default Footer;
