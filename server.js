const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"],
  },
});

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM3", baudRate: 115200 });

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
parser.on("data", function (data) {
  console.log(data);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.listen(5000, () => {
  console.log("server started on port 5000");
});
