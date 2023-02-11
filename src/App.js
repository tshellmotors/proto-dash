import React, { useEffect, useState } from "react";
import "./scss/home.scss";
import LeftPanel from "./partials/LeftPanel";
import RightPanel from "./partials/RightPanel";
import CenterPanel from "./partials/CenterPanel";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    socket.on("sensor_data_m", (data) => {
      setData(data);
    });
  }, [socket]);

  return (
    <div className="App">
      <LeftPanel />
      <CenterPanel />
      <RightPanel posData={data} />
    </div>
  );
}

export default App;
