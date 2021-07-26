import { NextApiRequest, NextApiResponse } from 'next'
import { getDistanceInKilometers } from 'utils/harvesine'
import { API_ENDPOINT } from 'config'

type ErrorMessage = {
  message: string
}

const BOUTIQUES_NUMBER = 5

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Boutique[] | ErrorMessage>
) => {
  const { method, query } = request
  if (method !== 'GET') {
    response.status(405).json({ message: 'Unsupported method' })
  }

  const latitude = query.latitude as string
  const longitude = query.longitude as string

  if (!latitude || !longitude) {
    return response
      .status(400)
      .json({ message: 'You should provide both latitude and longitude' })
  }

  try {
    const boutiquesResponse = await fetch(API_ENDPOINT)

    const { status } = boutiquesResponse
    if (status !== 200) {
      const { message } = await boutiquesResponse.json()
      return response.status(status).json({ message })
    }

    const boutiques: Boutique[] = await boutiquesResponse.json()

    // Ideally we would calculate the distance and sort the items on the trouva service that provides the boutiques
    const boutiquesWithDistance = boutiques.map((boutique) => ({
      ...boutique,
      distance: getDistanceInKilometers({
        startLatitude: parseInt(latitude),
        startLongitude: parseInt(longitude),
        endLatitude: boutique.location.lat,
        endLongitude: boutique.location.lon
      })
    }))

    const closestBoutiques = boutiquesWithDistance
      .sort(
        (firstElement, secondElement) =>
          firstElement.distance - secondElement.distance
      )
      .slice(0, BOUTIQUES_NUMBER)

    return response.status(200).json(closestBoutiques)
  } catch (error) {
    console.log('got on catch')
    return response
      .status(500)
      .json({ message: 'Could not retrieve boutiques' })
  }
}

export default handler
