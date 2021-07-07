import { useCallback } from 'react'
import { useEffect, useState } from 'react'
import { useGeolocation } from './useGeolocation'

export function useBoutiques() {
  const location = useGeolocation()

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

  return { userLocation: location, boutiques, loading, error }
}
