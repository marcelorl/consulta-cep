import React from 'react'
import styled from 'styled-components'

import FormSearchContainer from '../../molecules/FormSearchContainer'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: arial;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;
`

const MapContainer = React.lazy(() => import('../../organims/MapContainer'))

const App = () =>
  <AppWrapper>
    <Title>Consulta de endereço</Title>
    <FormSearchContainer />
    <React.Suspense fallback={<div>Carregando...</div>}>
      <MapContainer />
    </React.Suspense>
  </AppWrapper>

export default App
