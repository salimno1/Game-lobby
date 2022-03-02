import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const WeaponDetail = (props) => {
  const { selectedWeapon, setConfirmedWeapon } = props;
  if (!selectedWeapon) {
    return null;
  }
  const tom = "";
  return (
    <div className="Wdetails">
      <h2>{selectedWeapon.name}</h2>
      <h3>{selectedWeapon.type}</h3>
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.accuracy}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="black"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.damage}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="black"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.range}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="#141414;"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.fireRate}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="black"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.mobility}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="black"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <h5>accuracy</h5>
      <ProgressBar
        completed={selectedWeapon.control}
        width="250px"
        animateOnRender={true}
        maxCompleted={100}
        bgColor="black"
        borderRadius="0px"
        baseBgColor="#f5f5f5a4"
        transitionDuration="0.2s"
        height="10px"
      />
      <div>
        <button onClick={() => setConfirmedWeapon(selectedWeapon)}>
          click
        </button>
      </div>
    </div>
  );
};

export default WeaponDetail;
