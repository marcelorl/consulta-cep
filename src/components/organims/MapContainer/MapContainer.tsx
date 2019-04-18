import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Map from '../../molecules/Map'
import closeSvg from './images/close.svg'

interface IState {
  isShown: boolean
}

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

class MapContainer extends PureComponent {
  state: IState

  constructor (props: any) {
    super(props)

    this.state = {
      isShown: false
    }

    this.onClickCloseButton = this.onClickCloseButton.bind(this)
  }

  onClickCloseButton () {
    this.setState({
      isShown: false
    })
  }

  render () {
    if (!this.state.isShown) return null

    return (
      <MapContainerWrapper >
        <CloseButton type="button" onClick={this.onClickCloseButton}>
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
}


export default MapContainer
