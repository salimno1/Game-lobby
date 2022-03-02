import React, { useState } from "react";

const Footer = (props) => {
  const { selectedSoldier, confirmedWeapon } = props;

  return (
    <div className="footerContainer">
      <div className="userfooter"></div>
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
