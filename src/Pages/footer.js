import React, { useState } from "react";

const Footer = (props) => {
  const { selectedSoldier, avatars } = props;
  const soldier =
    selectedSoldier && avatars.find((item) => item.id == selectedSoldier);

  return (
    <div className="footerContainer">
      <div className="userfooter"></div>
      <div className="selectedFooter">
        <img src={soldier.image} alt="" />
      </div>
      <div className="gameFooter"></div>
    </div>
  );
};

export default Footer;
