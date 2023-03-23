const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const url = "http://localhost:8086"
const token = "EstIPygoaXUn-JVuHj92hEiBqvDMhkRZYWjJvbg05oXrvePuCbUvPAy8cENZkd8ZLl7rxWU9JPgdIX2gcxv8rA=="
const org = "9c4e95118fc73a39"
const bucket = "MPU_data"

const influxDB = new InfluxDB({ url, token })
const writeApi = influxDB.getWriteApi(org, bucket)

writeApi.useDefaultTags({ region: 'west' })

const port = new SerialPort({ path: "COM3", baudRate: 115200 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

parser.on("data", function (data) {
  const obj = JSON.parse(data);
  const roll = obj.r;
  const pitch = obj.p;
  const yaw = obj.y;
 


  const point = new Point('sensor_data')
    .tag('sensor_id', 'mpu1')
    .floatField('roll', parseFloat(roll))
    .floatField('pitch', parseFloat(pitch))
    .floatField('yaw', parseFloat(yaw));

  writeApi.writePoint(point)
})

process.on('SIGINT', () => {
  console.log('Exiting...')
  writeApi.close().then(() => {
    console.log('Write API closed')
    process.exit(0)
  })
})
