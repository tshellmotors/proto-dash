import React, { useState, useMemo } from "react";
import Slider from "react-input-slider";
import Stripes from "../images/stripes.png";

const LeftDisplay = () => {
  const [angle, setAngle] = useState(0);

  const handleChange = (value) => {
    setAngle(value.x);
  };

  const menuItemStyle = (rotation) => ({
    transform: `rotate(${rotation}deg)`,
  });

  // const menuItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const menuItems = [
    { name: "Lights", data: "ON" },
    { name: "Vehicle Position", data: "Data" },
    { name: "Trip Meter", data: "Data" },
    { name: "Locks", data: "Data" },
    { name: "Display", data: "Data" },
    { name: "Driving", data: "Data" },
    { name: "Autopilot", data: "Data" },
    { name: "Safety & Security", data: "Data" },
    { name: "Service", data: "Data" },
    { name: "Software", data: "Data" },
    { name: "Driving Mode / Torque", data: "Data" },
    { name: "SoH", data: "No issues found" },
    { name: "AC", data: "61 deg / OFF" },
  ];

  const visibleItems = menuItems.length;
  const anglePerItem = 360 / menuItems.length;

  const activeIndex = useMemo(() => {
    const index = Math.round(((360 - angle) % 360) / anglePerItem);
    return (index + Math.ceil(visibleItems - 1) - 1) % menuItems.length;
  }, [angle, anglePerItem, menuItems.length]);

  const firstOpa = (index) => {
    const distance = Math.min(
      Math.abs(index - activeIndex),
      menuItems.length - Math.abs(index - activeIndex)
    );
    return distance === 1;
  };
  const secondOpa = (index) => {
    const distance = Math.min(
      Math.abs(index - activeIndex),
      menuItems.length - Math.abs(index - activeIndex)
    );
    return distance === 2;
  };
  const thirdOpa = (index) => {
    const distance = Math.min(
      Math.abs(index - activeIndex),
      menuItems.length - Math.abs(index - activeIndex)
    );
    return distance === 3;
  };

  return (
    <div className="LeftDisplay">
      <div className="menuShade"></div>
      <span className="menuCenterLine"></span>
      <div className="rotatable-menu">
        <ul className="menu" style={menuItemStyle(angle)}>
          {menuItems.map(
            (item, index) => (
              console.log(item),
              (
                <li
                  key={index}
                  className={`menu-item ${
                    index === activeIndex ? "active" : ""
                  } ${firstOpa(index) ? "firstOpa" : ""} ${
                    secondOpa(index) ? "secondOpa" : ""
                  } ${thirdOpa(index) ? "thirdOpa" : ""}`}
                  style={menuItemStyle(anglePerItem * index)}
                >
                  <span
                    className="menu-item-group"
                    style={menuItemStyle(-angle - anglePerItem * index)}
                  >
                    <span className="menu-item-title">{item.name}</span>
                    <span className="menu-item-text">{item.data}</span>
                  </span>
                </li>
              )
            )
          )}

          <span className="menu-bg">
            <img src={Stripes} />
          </span>
        </ul>
      </div>

      <div className="slider">
        <Slider
          axis="x"
          x={angle}
          xmin={0}
          xmax={360}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default LeftDisplay;
