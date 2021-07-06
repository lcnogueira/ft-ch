import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as S from './styles'

export type BoutiqueProp = {
  _id: string
  name: string
  slug: string
  location: {
    lon: number
    lat: number
  }
  description: string
  logo?: {
    url: string
  }
  founder_quote: string
}

export type MapProps = {
  boutiques?: BoutiqueProp[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ boutiques }: MapProps) => {
  const router = useRouter()
  return (
    <S.Wrapper>
      <S.Title>Trouva Challenge</S.Title>
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: '100%', width: '100%' }}
      >
        <CustomTileLayer />
        {boutiques?.map(({ _id, slug, name, location }) => {
          const { lat, lon } = location
          return (
            <Marker
              key={`place-${_id}`}
              position={[lat, lon]}
              title={name}
              riseOnHover
              eventHandlers={{
                click: () => {
                  router.push(`/boutique/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.Wrapper>
  )
}

export default Map
