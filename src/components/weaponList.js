import React from "react";

const WeaponShow = (props) => {
  const { image, id, select } = props;
  return (
    <div className="charContainer">
      <div className="c2">
        <img className="img-c2" onClick={() => select(id)} src={image} alt="" />
      </div>
    </div>
  );
};

export default WeaponShow;
