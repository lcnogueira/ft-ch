const EARTH_RADIUS_IN_KM = 6371
const TO_RADIANS_CONVERTER = Math.PI / 180

type getDistanceProps = {
  startLatitude: number
  startLongitude: number
  endLatitude: number
  endLongitude: number
}

//Harvesine Implementation
export function getDistanceInKilometers({
  startLatitude,
  startLongitude,
  endLatitude,
  endLongitude
}: getDistanceProps) {
  const distanceLat = toRadians(endLatitude - startLatitude)
  const distanceLng = toRadians(endLongitude - startLongitude)

  const a =
    Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
    Math.cos(toRadians(startLatitude)) *
      Math.cos(toRadians(endLatitude)) *
      Math.sin(distanceLng / 2) *
      Math.sin(distanceLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distanceInKilometers = EARTH_RADIUS_IN_KM * c
  return distanceInKilometers
}

function toRadians(deg: number) {
  return deg * TO_RADIANS_CONVERTER
}
