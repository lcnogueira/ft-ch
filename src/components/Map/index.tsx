import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'
import { MAPBOX_API_KEY, MAPBOX_STYLEID, MAPBOX_USERID } from 'config'

import * as S from './styles'
import { mapView } from './config'

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

export type MapProps = {
  boutiques?: Boutique[]
  userLocation: GeolocationCoordinates
}

const Map = ({ boutiques, userLocation }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <S.Title>Trouva Challenge</S.Title>
      <MapContainer
        center={{
          lat: userLocation.latitude || 0,
          lng: userLocation.longitude || 0
        }}
        zoom={mapView.zoom}
        minZoom={2}
        style={{ height: '100%', width: '100%' }}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
      >
        <MapConsumer>
          {(map) => {
            const width =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth

            if (width < 768) {
              map.setMinZoom(2)
            }

            map.addEventListener('dragend', () => {
              mapView.setView(map.getCenter())
            })
            map.addEventListener('zoomend', () => {
              mapView.setView(map.getCenter(), map.getZoom())
            })

            return null
          }}
        </MapConsumer>
        <CustomTileLayer />
        {boutiques?.map(({ _id, slug, name, location }) => {
          const { lat, lon } = location
          return (
            <Marker
              key={`boutique-${_id}`}
              position={[lat, lon]}
              title={name}
              riseOnHover
              eventHandlers={{
                click: () => {
                  router.push(`boutique/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
