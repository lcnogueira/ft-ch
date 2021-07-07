import { GeolocationContext } from 'contexts/GeolocationProvider'
import { useContext } from 'react'

export function useGeolocation() {
  return useContext(GeolocationContext)
}
