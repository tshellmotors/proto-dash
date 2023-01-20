import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Line } from "@ant-design/plots";

const InfoPill = ({ label, value }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
    color: "#11bfba",
  };
  return (
    <div className="InfoPill">
      <span className="label">{label}</span>
      <span className="graph">
        <Line {...config} />
      </span>
    </div>
  );
};

const CenterPanel = () => {
  return (
    <div className="CenterPanel">
      <div className="InfoWrapper">
        <InfoPill
          label="Battery Current"
          value={["200 amps", "20 deg C", "80%"]}
        />
        <InfoPill label="Battery Temp" value={["200 amps", "20 deg C"]} />
        <InfoPill label="Motor Current" value={["500"]} />
        <InfoPill label="Motor Temp" value={["495"]} />
        <InfoPill label="Motor RPM" value={["500 meters"]} />
        <InfoPill label="Wheel RPM" value={["500 meters"]} />
        <InfoPill label="Acceleration / Deceleration" value={["500 meters"]} />
        <InfoPill label="Yaw" value={["500 meters"]} />
        <InfoPill label="Pitch" value={["500 meters"]} />
        <InfoPill label="Roll" value={["500 meters"]} />
      </div>
    </div>
  );
};

export default CenterPanel;
