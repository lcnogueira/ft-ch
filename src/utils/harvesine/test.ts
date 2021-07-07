import { getDistanceInKilometers } from '.'

const mossoroLocation = {
  latitude: -5.212995299999999,
  longitude: -37.327509299999996
}

const crocodileStoreLocation = {
  latitude: 40.7508375,
  longitude: -73.9785294
}

describe('harvesine methods', () => {
  it('should return the correct distance in kilometers', () => {
    const distance = {
      startLatitude: mossoroLocation.latitude,
      startLongitude: mossoroLocation.longitude,
      endLatitude: crocodileStoreLocation.latitude,
      endLongitude: crocodileStoreLocation.longitude
    }

    expect(getDistanceInKilometers(distance)).toBe(6328.197070450359)
  })
})
