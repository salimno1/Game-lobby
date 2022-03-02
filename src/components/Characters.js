import React from "react";

const OneCharacter = (props) => {
  const { oneAvatar, select } = props;
  return (
    <div className="charContainer">
      <div className="c1">
        <img
          className="img-c1"
          onClick={() => select(oneAvatar)}
          src={oneAvatar.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default OneCharacter;
