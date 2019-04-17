import React from 'react'

import { Store } from '../../../Store'

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
    <div>
      Template
      {console.log(state)}
    </div>
  )
}

export default AppTemplate
