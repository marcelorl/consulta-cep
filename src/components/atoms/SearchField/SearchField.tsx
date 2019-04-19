import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

interface ISearchField {
  id: string
}

const SearchFieldWrapper = styled(InputMask)`
  border: 1px solid ${props => props.theme.colors.darkgray};
  border-radius: 5px;
  box-shadow: 0;
  font-size: 1rem;
  padding: 5px 10px;
`

const SearchField = (props: ISearchField) =>
  <SearchFieldWrapper mask="99999-999" {...props} required />

export default SearchField
