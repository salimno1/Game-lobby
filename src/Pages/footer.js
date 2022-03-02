import React, { useState } from "react";

const Footer = (props) => {
  const { selectedSoldier, avatars } = props;
  if (!selectedSoldier) {
    return null;
  }
  return (
    <div className="footerContainer">
      <div className="userfooter"></div>
      <div className="selectedFooter">
        <img src={selectedSoldier.image} alt="" />
      </div>
      <div className="gameFooter"></div>
    </div>
  );
};

export default Footer;
