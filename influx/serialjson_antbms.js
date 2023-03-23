const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const url = "http://localhost:8086"
const token = "EstIPygoaXUn-JVuHj92hEiBqvDMhkRZYWjJvbg05oXrvePuCbUvPAy8cENZkd8ZLl7rxWU9JPgdIX2gcxv8rA=="
const org = "9c4e95118fc73a39"
const bucket = "Ant_BMS"

const influxDB = new InfluxDB({ url, token })
const writeApi = influxDB.getWriteApi(org, bucket)

writeApi.useDefaultTags({ region: 'west' })

const port = new SerialPort({ path: "COM3", baudRate: 115200 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

parser.on("data", function (data) {
  const obj = JSON.parse(data);

  
  const totalVoltage = obj.totalVoltage;
  const cellVoltage1 = obj.cellVoltage1;
  const cellVoltage2 = obj.cellVoltage2;
  const cellVoltage3 = obj.cellVoltage3;
  const cellVoltage4 = obj.cellVoltage4;
  const cellVoltage5 = obj.cellVoltage5;
  const cellVoltage6 = obj.cellVoltage6;
  const cellVoltage7 = obj.cellVoltage7;
  const cellVoltage8 = obj.cellVoltage8;
  const cellVoltage9 = obj.cellVoltage9;
  const cellVoltage10 = obj.cellVoltage10;
  const cellVoltage11 = obj.cellVoltage11;
  const cellVoltage12 = obj.cellVoltage12;
  const cellVoltage13 = obj.cellVoltage13;
  const cellVoltage14 = obj.cellVoltage14;
  const cellVoltage15 = obj.cellVoltage15;
  const cellVoltage16 = obj.cellVoltage16;
  const cellVoltage17 = obj.cellVoltage17;
  const cellVoltage18 = obj.cellVoltage18;
  const cellVoltage19 = obj.cellVoltage19;
  const cellVoltage20 = obj.cellVoltage20;
  const cellVoltage21 = obj.cellVoltage21;
  const cellVoltage22 = obj.cellVoltage22;
  const cellVoltage23 = obj.cellVoltage23;
  const cellVoltage24 = obj.cellVoltage24;
  const current = obj.current;
  const soc = obj.soc;
  const batteryCapacity = obj.batteryCapacity;
  const batteryRemaining = obj.batteryRemaining;
  const batteryCyclecapacity = obj.batteryCyclecapacity;
  const uptime = obj.uptime;
  const temperature1 = obj.temperature1;
  const temperature2 = obj.temperature2;
  const temperature3 = obj.temperature3;
  const temperature4 = obj.temperature4;
  const temperature5 = obj.temperature5;
  const temperature6 = obj.temperature6;
  const chargeMOSFETstatus = obj.chargeMOSFETstatus;
  const dischargeMOSFETstatus = obj.dischargeMOSFETstatus;
  const balancerStatus = obj.balancerStatus;
  const tireLength = obj.tireLength;
  const numberoofPulses = obj.numberoofPulses;
  const relaySwitch = obj.relaySwitch;
  const currentPower = obj.currentPower;
  const highestVoltagecell = obj.highestVoltagecell;
  const maxCellvoltage= obj.maxCellvoltage;
  const lowestVoltagecell = obj.lowestVoltagecell;
  const minCellvoltage = obj.minCellvoltage;
  const avgCellvoltage = obj.avgCellvoltage;
  const cellCount = obj.cellCount;
  const DSvoltageDmosfet = obj.DSvoltageDmosfet;
  const DrivevoltageDmosfet= obj.DrivevoltageDmosfet;
  const DrivevoltageCmosfet = obj.DrivevoltageCmosfet;
  const initialValuecomparator = obj.initialValuecomparator;
  const batteryBalancebitmask = obj.batteryBalancebitmask;
  const sytemLog = obj.sytemLog;
  const CRC = obj.CRC;


  const point = new Point('sensor_data')
    .tag('sensor_id', 'antbms')
    .floatField('totalVoltage', parseFloat(totalVoltage))
    .floatField('cellVoltage1', parseFloat(cellVoltage1))
    .floatField('cellVoltage2', parseFloat(cellVoltage2))
    .floatField('cellVoltage3', parseFloat(cellVoltage3))
    .floatField('cellVoltage4', parseFloat(cellVoltage4))
    .floatField('cellVoltage5', parseFloat(cellVoltage5))
    .floatField('cellVoltage6', parseFloat(cellVoltage6))
    .floatField('cellVoltage7', parseFloat(cellVoltage7))
    .floatField('cellVoltage8', parseFloat(cellVoltage8))
    .floatField('cellVoltage9', parseFloat(cellVoltage9))
    .floatField('cellVoltage10', parseFloat(cellVoltage10))
    .floatField('cellVoltage11', parseFloat(cellVoltage11))
    .floatField('cellVoltage12', parseFloat(cellVoltage12))
    .floatField('cellVoltage13', parseFloat(cellVoltage13))
    .floatField('cellVoltage14', parseFloat(cellVoltage14))
    .floatField('cellVoltage15', parseFloat(cellVoltage15))
    .floatField('cellVoltage16', parseFloat(cellVoltage16))
    .floatField('cellVoltage17', parseFloat(cellVoltage17))
    .floatField('cellVoltage18', parseFloat(cellVoltage18))
    .floatField('cellVoltage19', parseFloat(cellVoltage19))
    .floatField('cellVoltage20', parseFloat(cellVoltage20))
    .floatField('cellVoltage21', parseFloat(cellVoltage21))
    .floatField('cellVoltage22', parseFloat(cellVoltage22))
    .floatField('cellVoltage23', parseFloat(cellVoltage23))
    .floatField('cellVoltage24', parseFloat(cellVoltage24))
    .floatField('current', parseFloat(current))
    .floatField('soc', parseFloat(soc))
    .floatField('batteryCapacity', parseFloat(batteryCapacity))
    .floatField('batteryRemaining', parseFloat(batteryRemaining))
    .floatField('batteryCyclecapacity', parseFloat(batteryCyclecapacity))
    .floatField('uptime', parseFloat(uptime))
    .floatField('temperature1', parseFloat(temperature1))
    .floatField('temperature2', parseFloat(temperature2))
    .floatField('temperature3', parseFloat(temperature3))
    .floatField('temperature4', parseFloat(temperature4))
    .floatField('temperature5', parseFloat(temperature5))
    .floatField('temperature6', parseFloat(temperature6))
    .floatField('chargeMOSFETstatus', parseFloat(chargeMOSFETstatus))
    .floatField('dischargeMOSFETstatus', parseFloat(dischargeMOSFETstatus))
    .floatField('balancerStatus', parseFloat(balancerStatus))
    .floatField('tireLength', parseFloat(tireLength))
    .floatField('numberoofPulses', parseFloat(numberoofPulses))
    .floatField('relaySwitch', parseFloat(relaySwitch))
    .floatField('currentPower', parseFloat(currentPower))
    .floatField('highestVoltagecell', parseFloat(highestVoltagecell))
    .floatField('maxCellvoltage', parseFloat(maxCellvoltage))
    .floatField('lowestVoltagecell', parseFloat(lowestVoltagecell))
    .floatField('minCellvoltage', parseFloat(minCellvoltage))
    .floatField('avgCellvoltage', parseFloat(avgCellvoltage))
    .floatField('cellCount', parseFloat(cellCount))
    .floatField('DSvoltageDmosfet', parseFloat(DSvoltageDmosfet))
    .floatField('DrivevoltageDmosfet', parseFloat(DrivevoltageDmosfet))
    .floatField('DrivevoltageCmosfet', parseFloat(DrivevoltageCmosfet))
    .floatField('initialValuecomparator', parseFloat(initialValuecomparator))
    .floatField('batteryBalancebitmask', parseFloat(batteryBalancebitmask))
    .floatField('sytemLog', parseFloat(sytemLog))
    .floatField('CRC', parseFloat(CRC));

  writeApi.writePoint(point)
})

process.on('SIGINT', () => {
  console.log('Exiting...')
  writeApi.close().then(() => {
    console.log('Write API closed')
    process.exit(0)
  })
})
