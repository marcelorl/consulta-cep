import React from 'react'
import styled from 'styled-components'

import { Store } from '../../../Store'
import Button from '../../atoms/Button'
import SearchField from '../../atoms/SearchField'
import fetchAddress from '../../../contexts/fetchAddress'

const FormSearchContainerWrapper = styled.form`
  background: ${props => props.theme.colors.gainsboro};
  box-sizing: border-box;
  padding: 2rem 2rem 4rem;
  width: 100%;
`

const FormSearchFieldWrapperLabel = styled.div`
  font-weight: 600;
  margin-bottom: 2rem;
`

const SearchBar = styled.div`
  color: ${props => props.theme.colors.darkgray};
  display: flex;
`

const LabelWrapper = styled.label`
  > * {
    margin-right: 1rem;
  }
`

const FormSearchContainer = () => {
  const { dispatch } = React.useContext(Store)
  const [ zipCode, setZipCode ] = React.useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await fetchAddress(dispatch, zipCode)
  }

  return (
    <FormSearchContainerWrapper onSubmit={onSubmit}>
      <FormSearchFieldWrapperLabel>Consultar</FormSearchFieldWrapperLabel>
      <SearchBar>
        <LabelWrapper htmlFor="search-field">
          <span>CEP</span>
          <SearchField id="search-field" value={zipCode} onChange={setZipCode} />
        </LabelWrapper>
        <Button />
      </SearchBar>
    </FormSearchContainerWrapper>
  )
}

export default React.memo(FormSearchContainer)
