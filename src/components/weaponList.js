import React from "react";

const WeaponShow = (props) => {
  const { weapon, select } = props;

  return (
    <div className="charContainer">
      <div className="c2">
        <img
          className="img-c2"
          onClick={() => select(weapon)}
          src={weapon.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default WeaponShow;
