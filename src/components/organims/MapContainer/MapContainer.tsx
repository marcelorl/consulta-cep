import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Store } from '../../../contexts/store'
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
  const { action, state } = React.useContext(Store)

  const onClickCloseButton = () => {
    return action.resetState()
  }

  const shouldShowMap = () => {
    if (state.status === 'ERROR') return <div>CEP não encontrado!</div>

    return (
      <Fragment>
        <AddressWrapper>
          <Street>{state.address.logradouro}</Street>
          <p>{state.address.bairro}</p>
          <p>{state.address.localidade} - {state.address.uf}</p>
          <p>{state.address.cep}</p>
        </AddressWrapper>

        <Map coordinates={state.address.mapsCoordinates} />
      </Fragment>
    )
  }

  if (!['LOADED', 'ERROR'].includes(state.status)) return null

  return (
    <MapContainerWrapper >
      <CloseButton type="button" onClick={onClickCloseButton}>
        <img src={closeSvg} alt="close"/>
      </CloseButton>

      {shouldShowMap()}
    </MapContainerWrapper>
  )
}


export default MapContainer
