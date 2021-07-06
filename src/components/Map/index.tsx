import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as S from './styles'

export type Boutique = {
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
  boutiques?: Boutique[]
}

const Map = ({ boutiques }: MapProps) => (
  <S.Wrapper>
    <S.Title>Trouva Challenge</S.Title>
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {boutiques?.map(({ _id, name, location }) => {
        const { lat, lon } = location
        return (
          <Marker
            key={`place-${_id}`}
            position={[lat, lon]}
            title={name}
            riseOnHover
          />
        )
      })}
    </MapContainer>
  </S.Wrapper>
)

export default Map
