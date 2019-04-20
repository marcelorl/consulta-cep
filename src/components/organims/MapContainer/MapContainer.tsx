import React from 'react'
import styled from 'styled-components'

import Map from '../../molecules/Map'
import closeSvg from './images/close.svg'

const MapContainerWrapper = styled.div`
  border: 2px solid ${props => props.theme.colors.gainsboro};
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 3rem;
  position: relative;
`

const AddressWrapper = styled.div`
  margin-bottom: 2rem;

  > * {
    margin-bottom: 1rem;  
  }
`

const Street = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 1rem;
  
  img {
    height: 1rem;
    width: 1rem;    
  }
`

const MapContainer = () => {
  const [ isShown, setIsShown ] = React.useState(true)

  const onClickCloseButton = () => {
    setIsShown(false)
  }

  if (!isShown) return null

  return (
    <MapContainerWrapper >
      <CloseButton type="button" onClick={onClickCloseButton}>
        <img src={closeSvg} alt="close"/>
      </CloseButton>

      <AddressWrapper>
        <Street>Rua Miguel Mentem</Street>
        <p>Vila Guilherme</p>
        <p>São Paulo - SP</p>
        <p>02050-010</p>
      </AddressWrapper>

      <Map />
    </MapContainerWrapper>
  )
}


export default MapContainer
