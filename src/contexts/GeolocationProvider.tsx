import { createContext, useEffect, useState } from 'react'

type GeolocationContextValueProps = {
  location: GeolocationCoordinates
}

export const GeolocationContext = createContext(
  {} as GeolocationContextValueProps
)

type GeolocationProviderProps = {
  children: React.ReactNode
}

export function GeolocationProvider({ children }: GeolocationProviderProps) {
  const [location, setLocation] = useState({} as GeolocationCoordinates)

  useEffect(() => {
    if (!navigator.geolocation) {
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords)
    })
  }, [])

  return (
    <GeolocationContext.Provider
      value={{
        location
      }}
    >
      {children}
    </GeolocationContext.Provider>
  )
}
