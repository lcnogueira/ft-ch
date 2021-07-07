const EARTH_RADIUS_IN_KM = 6371.071
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
  const radiusStartLatitude = toRadians(startLatitude)
  const radiusEndLatitude = toRadians(endLatitude)
  const distanceLatitude = radiusEndLatitude - radiusStartLatitude
  const distanceLongitude = toRadians(endLongitude - startLongitude)

  const distanceInKilometers =
    2 *
    EARTH_RADIUS_IN_KM *
    Math.asin(
      Math.sqrt(
        Math.sin(distanceLatitude / 2) * Math.sin(distanceLatitude / 2) +
          Math.cos(radiusStartLatitude) *
            Math.cos(radiusEndLatitude) *
            Math.sin(distanceLongitude / 2) *
            Math.sin(distanceLongitude / 2)
      )
    )
  return distanceInKilometers
}

function toRadians(deg: number) {
  return deg * TO_RADIANS_CONVERTER
}
