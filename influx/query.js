const { InfluxDB, Point } = require('@influxdata/influxdb-client');

/** Environment variables **/
const url = "http://localhost:8086"
const token = "EstIPygoaXUn-JVuHj92hEiBqvDMhkRZYWjJvbg05oXrvePuCbUvPAy8cENZkd8ZLl7rxWU9JPgdIX2gcxv8rA=="
const org = "9c4e95118fc73a39"

/**
 * Instantiate the InfluxDB client
 * with a configuration object.
 *
 * Get a query client configured for your org.
 **/
const queryApi = new InfluxDB({url, token}).getQueryApi(org)

/** To avoid SQL injection, use a string literal for the query. */
const fluxQuery = 'from(bucket:"MPU_data") |> range(start: 0) |> filter(fn: (r) => r._measurement == "sensor_data")'

const fluxObserver = {
  next(row, tableMeta) {
    const o = tableMeta.toObject(row)
    console.log(
      `${o._field}=${o._value}`
    )
  },
  error(error) {
    console.error(error)
    console.log('\nFinished ERROR')
  },
  complete() {
    console.log('\nFinished SUCCESS')
  }
}

/** Execute a query and receive line table metadata and rows. */
queryApi.queryRows(fluxQuery, fluxObserver)
