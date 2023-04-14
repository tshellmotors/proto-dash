import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";

const content = [
    "abcd",
    "abcd",
    "abcd",
    "abcd",
  ]

const LeftDisplay = () => {
    const [deg, setDeg] = useState();
    const [left, setLeft] = useState();
    const [top, setTop] = useState();

    const handleSlider = (index) => {

        setDeg(index.target.value);
        
        const leftPos = document.querySelector('#box').getBoundingClientRect().left;
        const topPos = document.querySelector('#box').getBoundingClientRect().top;

        console.log(topPos, leftPos);

        
        setTop(topPos);
        setLeft(leftPos);
    }

  return (
    <div className="LeftDisplay">
        <div style={{left, top, position:"absolute", marginLeft:"50px", marginTop:"-10px"}}>abcd</div>
        <input type="range" min="0" max="360" onChange={handleSlider}></input>

        <div className="box" id="box" style={{transform: `rotate(${deg ? deg : 0}deg)`}}></div>
    </div>
  );
};

export default LeftDisplay;
