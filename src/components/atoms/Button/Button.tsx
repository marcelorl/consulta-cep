import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  border-radius: 5px;
  background: ${props => props.theme.colors.cornflowerblue};
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  padding: .35rem 1rem;
`

const Button = () =>
  <ButtonWrapper>
    Buscar
  </ButtonWrapper>

export default Button
