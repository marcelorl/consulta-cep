import React from 'react'
import styled from 'styled-components'

interface ISearchField {
  id: string
}

const SearchFieldWrapper = styled.input`
  border: 1px solid ${props => props.theme.colors.darkgray};
  border-radius: 5px;
  box-shadow: 0;
  font-size: 1rem;
  padding: 5px 10px;
`

const SearchField = ({ id }: ISearchField) =>
  <SearchFieldWrapper placeholder="02050-010" id={id} required />

export default SearchField
