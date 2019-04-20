import React from 'react'
import styled from 'styled-components'
import GoogleMapReact, { Coords } from 'google-map-react'

import markerSvg from './images/marker.svg'

interface IMap {
  coordinates?: Coords
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const MarkerWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`

const Marker = React.memo((props: any) =>
  <MarkerWrapper>
    {props.children}
  </MarkerWrapper>
)

const Map = (props: IMap) =>
  <MapWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{lat: -15.5, lng: -57}}
      center={props.coordinates}
      defaultZoom={15}
    >
      <Marker {...props.coordinates}>
        <img src={markerSvg} alt="marker"/>
      </Marker>
    </GoogleMapReact>
  </MapWrapper>

export default Map
