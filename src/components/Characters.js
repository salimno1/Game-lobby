import React from "react";
import c1 from "../img/c4.gif";
import c2 from "../img/c2.gif";
import c3 from "../img/c3.gif";
import c4 from "../img/c5.gif";
import c5 from "../img/c7.gif";
import c8 from "../img/c8.gif";
const DifferentCharacters = () => {
  return (
    <div className="charContainer">
      <div className="c1">
        <img className="img-c1" src={c3} alt="" />
      </div>
      <div className="c1">
        <img className="img-c1" src={c4} alt="" />
      </div>
      <div className="c1">
        <img className="img-c1" src={c2} alt="" />
      </div>
      <div className="c1">
        <img className="img-c1" src={c5} alt="" />
      </div>
      <div className="c1">
        <img className="img-c1" src={c8} alt="" />
      </div>
      <div className="c1">
        <img className="img-c1" src={c1} alt="" />
      </div>
    </div>
  );
};

export default DifferentCharacters;
