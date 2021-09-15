import axios from 'axios'
import { useGeolocation } from 'hooks/useGeolocation'
import { api } from 'lib/api'
import { BoutiquesResponse } from 'pages/api/boutiques'
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
  const { location, error: locationError } = useGeolocation()

  const [boutiques, setBoutiques] = useState<Boutique[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getBoutiques = useCallback(
    async (latitude: number, longitude: number) => {
      try {
        setLoading(true)
        const { data } = await api.get<BoutiquesResponse>(
          `boutiques?latitude=${latitude}&longitude=${longitude}`
        )
        setBoutiques(data.boutiques)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error?.response?.data?.message)
        }
      } finally {
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    if (locationError) {
      setError(locationError)
      return
    }

    const { latitude, longitude } = location
    if (!!latitude && !!longitude) {
      getBoutiques(latitude, longitude)
    }
  }, [location, getBoutiques, locationError])

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
