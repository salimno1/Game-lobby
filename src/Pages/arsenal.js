import React, { useState } from "react";
import WeaponShow from "../components/weaponList";

const ArsenalSite = (props) => {
  const { selectedWeapon, weapons } = props;

  const weaponList = weapons.map((weapon) => (
    <WeaponShow
      image={weapon.image}
      onClick={() => selectedWeapon(weapon.id)}
      select={selectedWeapon}
      id={weapon.id}
    />
  ));

  return <div className="infoContentW">{weaponList}</div>;
};

export default ArsenalSite;
