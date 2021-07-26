import { createContext, useEffect, useState } from 'react'

type GeolocationContextValueProps = {
  location: GeolocationCoordinates
  error: string
  loading: boolean
}

export const GeolocationContext = createContext(
  {} as GeolocationContextValueProps
)

type GeolocationProviderProps = {
  children: React.ReactNode
}

export function GeolocationProvider({ children }: GeolocationProviderProps) {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState({} as GeolocationCoordinates)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser')
      return
    }

    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords)
        setLoading(false)
      },
      (error) => {
        setError(error.message)
        setLoading(false)
      }
    )
  }, [])

  return (
    <GeolocationContext.Provider value={{ location, error, loading }}>
      {children}
    </GeolocationContext.Provider>
  )
}
