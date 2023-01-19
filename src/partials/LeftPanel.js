import React, { useState, useEffect } from "react";

const LeftPanel = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="LeftPanel">
      <div className="time">
        {time} <br /> {date}
      </div>

      <div className="SpeedData">
        <span className="kmph">000</span>
        <span>km/h</span>

        <span className="trueKmph">000 km/h</span>
        <span>True Speed</span>
      </div>
    </div>
  );
};

export default LeftPanel;
