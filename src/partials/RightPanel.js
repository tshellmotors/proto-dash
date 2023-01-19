import React from "react";

const InfoPill = ({ label, value }) => {
  return (
    <div className="InfoPill">
      <span className="label">{label}</span>
      {value.map((data, i) => {
        return (
          <span className="data" key={i}>
            {data}
          </span>
        );
      })}
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="RightPanel">
      <div className="InfoWrapper">
        <InfoPill label="Battery" value={["200 amps", "20 deg C", "80%"]} />
        <InfoPill label="Motor" value={["200 amps", "20 deg C"]} />
        <InfoPill label="Motor RPM" value={["500"]} />
        <InfoPill label="Wheel RPM" value={["495"]} />
        <InfoPill label="Distance Travelled" value={["500 meters"]} />
      </div>
    </div>
  );
};

export default RightPanel;
