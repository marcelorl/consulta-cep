import React from 'react'
import styled from 'styled-components'
import GoogleMapReact, { Coords } from 'google-map-react'

interface IMap {
  center?: Coords
  zoom?: number
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = (props: IMap) =>
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{lat: -15.5, lng: -57}}
      defaultZoom={5}
    >
    </GoogleMapReact>
  </MapWrapper>

export default Map
