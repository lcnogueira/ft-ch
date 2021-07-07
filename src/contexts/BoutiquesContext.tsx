import { useGeolocation } from 'hooks/useGeolocation'
import { useCallback } from 'react'
import { createContext, useEffect, useState } from 'react'

type BoutiquesContextValueProps = {
  userLocation: GeolocationCoordinates
  boutiques: Boutique[]
  loading: boolean
  error: string
}

export const BoutiquesContext = createContext({} as BoutiquesContextValueProps)

type BoutiquesProviderProps = {
  children: React.ReactNode
}

export function BoutiquesProvider({ children }: BoutiquesProviderProps) {
  const { location } = useGeolocation()

  const [boutiques, setBoutiques] = useState<Boutique[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getBoutiques = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `/api/boutiques?latitude=${latitude}&longitude=${longitude}`
        )

        if (response.status !== 200) {
          const { message } = await response.json()
          throw new Error(message)
        }

        const boutiques = await response.json()
        setBoutiques(boutiques)
      } catch (error) {
        const { message } = error
        setError(message)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    const { latitude, longitude } = location
    if (!!latitude && !!longitude) {
      getBoutiques(latitude, longitude)
    }
  }, [location, getBoutiques])

  return (
    <BoutiquesContext.Provider
      value={{
        userLocation: location,
        boutiques,
        loading,
        error
      }}
    >
      {children}
    </BoutiquesContext.Provider>
  )
}
