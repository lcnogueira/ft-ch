import { NextApiRequest, NextApiResponse } from 'next'
import { getDistanceInKilometers } from 'utils/harvesine'

type ErrorMessage = {
  message: string
}

const BOUTIQUES_NUMBER = 5

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<Boutique[] | ErrorMessage>
) => {
  const { method, query } = request
  if (method === 'GET') {
    try {
      const latitude = query.latitude as string
      const longitude = query.longitude as string

      const boutiquesResponse = await fetch(process.env.API_ENDPOINT as string)
      const boutiques: Boutique[] = await boutiquesResponse.json()

      if (!latitude || !longitude) {
        return response.status(200).json(boutiques)
      }

      //Ideally we would calculate the distance and sort the items on the backend api route or by using geojson (if using mongodb)
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
    } catch (err) {
      return response
        .status(500)
        .json({ message: 'Could not retrieve boutiques' })
    }
  }

  response.status(405).json({ message: 'Unsupported method' })
}

export default handler