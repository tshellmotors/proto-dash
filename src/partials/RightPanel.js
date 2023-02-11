import React from "react";
import VehPos from "./VehPos";

const RightPanel = ({ posData }) => {
  return (
    <div className="RightPanel">
      <VehPos posData={posData} />
    </div>
  );
};

export default RightPanel;
