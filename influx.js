
const { InfluxDB, Point } = require('@influxdata/influxdb-client');

/** Environment variables **/
const url = "http://localhost:8086"
const token = "EstIPygoaXUn-JVuHj92hEiBqvDMhkRZYWjJvbg05oXrvePuCbUvPAy8cENZkd8ZLl7rxWU9JPgdIX2gcxv8rA=="
const org = "9c4e95118fc73a39"
const bucket = "Data"

/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 **/
const influxDB = new InfluxDB({ url, token })

/**
 * Create a write client from the getWriteApi method.
 * Provide your `org` and `bucket`.
 **/
const writeApi = influxDB.getWriteApi(org, bucket)

/**
 * Apply default tags to all points.
 **/
writeApi.useDefaultTags({ region: 'west' })

/**
 * Create a point and write it to the buffer.
 **/
const point1 = new Point('temperature')
  .tag('sensor_id', 'TLM01')
  .floatField('value', 24.0)
console.log(` ${point1}`)

writeApi.writePoint(point1)

/**
 * Flush pending writes and close writeApi.
 **/
writeApi.close().then(() => {
  console.log('WRITE FINISHED')
})
