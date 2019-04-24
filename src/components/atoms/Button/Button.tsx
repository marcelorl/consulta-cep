import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border-radius: 5px;
  background: ${props => props.theme.colors.lightblue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  padding: .35rem 1rem;
  
  &:hover {
    border: 1px solid ${props => props.theme.colors.lightblue};
  }
`

const Button = () =>
  <ButtonWrapper>
    Buscar
  </ButtonWrapper>

export default React.memo(Button)
