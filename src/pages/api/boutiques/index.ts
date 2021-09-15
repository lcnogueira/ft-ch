import { NextApiRequest, NextApiResponse } from 'next'
import { getDistanceInKilometers } from 'utils/harvesine'
import { API_ENDPOINT } from 'config'
import axios from 'axios'

const BOUTIQUES_NUMBER = 5

type ErrorMessage = {
  message: string
}

export type BoutiquesResponse = {
  boutiques: Boutique[]
}

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<BoutiquesResponse | ErrorMessage>
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
    const { data: boutiques } = await axios.get<Boutique[]>(API_ENDPOINT)

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

    return response.status(200).json({ boutiques: closestBoutiques })
  } catch (error) {
    let message = 'Could not retrieve boutiques'
    if (axios.isAxiosError(error)) {
      message = error?.response?.data?.message
    }

    return response.status(500).json({ message })
  }
}

export default handler
