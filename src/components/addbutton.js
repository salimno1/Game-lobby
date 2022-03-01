import React from "react";

const Addbtn = (props) => {
  const { selectedSoldier, avatars } = props;
  const soldier =
    selectedSoldier && avatars.find((item) => item.id == selectedSoldier);
};

export default Addbtn;
