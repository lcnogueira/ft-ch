import { useEffect, useState } from 'react'

export function useGeolocation() {
  const [location, setLocation] = useState({} as GeolocationCoordinates)

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords)
    })
  }, [])

  return location
}
