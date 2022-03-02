import React, { useState } from "react";
import WeaponShow from "../components/weaponList";

const ArsenalSite = (props) => {
  const { selectedWeapon, weapons } = props;

  const weaponList = weapons.map((weapon) => (
    <WeaponShow weapon={weapon} select={selectedWeapon} />
  ));

  return <div className="infoContentW">{weaponList}</div>;
};

export default ArsenalSite;
