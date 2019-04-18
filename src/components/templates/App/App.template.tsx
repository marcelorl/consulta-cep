import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Store } from '../../../Store'
import FormSearchContainer from '../../molecules/FormSearchContainer'

const App = styled.div`
  font-family: arial;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;
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
    <App>
      <Title>Consulta de endereço</Title>
      <FormSearchContainer />
    </App>
  )
}

export default AppTemplate
