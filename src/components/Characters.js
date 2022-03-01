import React from "react";

const OneCharacter = (props) => {
  const { image, name, id, select } = props;
  return (
    <div className="charContainer">
      <div className="c1">
        <img className="img-c1" onClick={() => select(id)} src={image} alt="" />
      </div>
    </div>
  );
};

export default OneCharacter;
