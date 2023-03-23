

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM3", baudRate: 115200 });


const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));


parser.on("data", function (data) {
const sensorData = data.split()[0].split(",");
const roll = sensorData[0];
const pitch = sensorData[1];
const yaw = sensorData[2];

  console.log(roll);
  // console.log(pitch);
  // console.log(yaw);
});

