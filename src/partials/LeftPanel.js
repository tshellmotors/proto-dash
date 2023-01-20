import React, { useState, useEffect } from "react";

const LeftPanel = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  useEffect(() => {
    // const timer = setInterval(() => {
    //   setDate(new Date());
    // }, 1000);
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  // const hour = today.getHours(locale, { hour12: true });
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
  });

  return (
    <div className="LeftPanel">
      <div className="info top">
        {time} : {minute} : {seconds} <br /> {date}
      </div>

      <div className="SpeedData">
        <span className="kmph">000</span>
        <span>km/h</span>

        <span className="trueKmph">000</span>
        <span>True Speed</span>
      </div>

      <div className="info bottom">
        Distance Travelled
        <br />
        <strong>500 meters</strong>
      </div>
    </div>
  );
};

export default LeftPanel;
