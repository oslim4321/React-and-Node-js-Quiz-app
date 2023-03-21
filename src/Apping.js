import React from 'react'
import Apps from './Client/pages/Apps'
import Store from './Client/REDUX/StoreRedux/Store'
import { Provider } from 'react-redux'

function Apping() {
  return (
    <div>
      <Provider store={Store}>
         <Apps />
      </Provider>
         
    </div>
  )
}

export default Apping