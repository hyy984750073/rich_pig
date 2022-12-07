import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyBottomTabs from './src/views/tabs/MyBottomTabs.js'

import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store.js'

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <MyBottomTabs />
      </NavigationContainer>
    </StoreProvider>
  )
}
