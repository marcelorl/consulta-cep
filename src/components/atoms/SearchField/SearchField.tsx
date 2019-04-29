import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'
import { omit } from 'lodash'

interface ISearchField {
  id: string
  onChange: any
  value: string
}

const SearchFieldWrapper = styled(InputMask)`
  border: 1px solid ${props => props.theme.colors.darkgray};
  border-radius: 5px;
  box-shadow: 0;
  font-size: 1rem;
  padding: 5px 10px;
`

const SearchField = (props: ISearchField) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <SearchFieldWrapper
      {...omit(props, 'onChange')}
      mask='99999-999'
      onChange={onChange}
      data-testid='search-field'
      placeholder='01234-567'
      required
    />
  )
}

export default React.memo(SearchField)
