import { COORDINATES } from './site'

const RAD = Math.PI / 180
const OBLIQUITY = 23.4397 * RAD

/* Standard refraction allowance: the sun looks like it has set once its centre
   is this far below the true horizon. */
const HORIZON = -0.833 * RAD

const daysSinceJ2000 = (at: Date) => at.getTime() / 86400000 + 2440587.5 - 2451545

/* Low-precision solar position from Astronomical Almanac, good to a minute or
   so at these latitudes — plenty for deciding day from dusk. Working from the
   altitude rather than from sunrise and sunset times keeps this free of date
   boundaries and time zones: the instant carries everything needed. */
function sunAltitude(at: Date, latitude: number, longitude: number) {
  const days = daysSinceJ2000(at)

  const meanAnomaly = (357.5291 + 0.98560028 * days) * RAD
  const eclipticLongitude =
    meanAnomaly +
    (1.9148 * Math.sin(meanAnomaly) +
      0.02 * Math.sin(2 * meanAnomaly) +
      0.0003 * Math.sin(3 * meanAnomaly)) *
      RAD +
    282.9372 * RAD

  const declination = Math.asin(Math.sin(eclipticLongitude) * Math.sin(OBLIQUITY))
  const rightAscension = Math.atan2(
    Math.sin(eclipticLongitude) * Math.cos(OBLIQUITY),
    Math.cos(eclipticLongitude),
  )

  const siderealTime = (280.16 + 360.9856235 * days) * RAD + longitude * RAD
  const hourAngle = siderealTime - rightAscension

  return Math.asin(
    Math.sin(latitude * RAD) * Math.sin(declination) +
      Math.cos(latitude * RAD) * Math.cos(declination) * Math.cos(hourAngle),
  )
}

export function isDuskAtCottage(at: Date) {
  return sunAltitude(at, COORDINATES.latitude, COORDINATES.longitude) < HORIZON
}
