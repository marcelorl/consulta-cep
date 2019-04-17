import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Store } from '../../../Store'
import Button from '../../atoms/Button'
import SearchField from '../../atoms/SearchField'

const FormSearchFieldWrapper = styled.form`
  background: ${props => props.theme.colors.gainsboro};
  font-family: arial;
  padding: 3rem 2rem 4rem;
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

const AppTemplate = () => {
  const { state, dispatch } = React.useContext(Store)

  const fetchDataAction = async () => {
    const data = await fetch('https://viacep.com.br/ws/02050010/json')
    const dataJSON = await data.json()
    console.log(dataJSON)

    // return dispatch({
    //   type: 'FETCH_DATA',
    //   payload: dataJSON._embedded.episodes
    // })
  }

  React.useEffect(() => {
    fetchDataAction()
  })

  return (
    <Fragment>
      <FormSearchFieldWrapper>
        <FormSearchFieldWrapperLabel>Consultar</FormSearchFieldWrapperLabel>
        <SearchBar>
          <LabelWrapper htmlFor="search-field">
            <span>CEP</span>
            <SearchField id="search-field" />
          </LabelWrapper>
          <Button />
        </SearchBar>
      </FormSearchFieldWrapper>
    </Fragment>
  )
}

export default AppTemplate
