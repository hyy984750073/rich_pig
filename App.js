import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyBottomTabs from './src/views/tabs/MyBottomTabs.js'

import { Provider as StoreProvider } from 'react-redux'
import store from '@store/store.js'

import TestOne from '@views/TestOne.js'
import TestTwo from '@views/TestTwo.js'
import TestThree from '@views/TestThree.js'
import CreatePostScreen from '@views/CreatePostScreen.js'
import DetailsScreen from '@views/DetailsScreen.js'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        {/* <MyBottomTabs /> */}
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'red' },
            headerTitleStyle: { color: 'white' },
          }}>
          <Stack.Screen
            name="Tabs"
            component={MyBottomTabs}
            options={{
              // headerTitle: '首页',
              headerMode: null,
              // headerStyle: { backgroundColor: 'orangered' },
              header: () => {
                // 外层不显示标题
                return <React.Fragment />
              },
            }}
          />
          <Stack.Screen name="One" component={TestOne} />
          <Stack.Screen name="Two" component={TestTwo} />
          <Stack.Screen name="Three" component={TestThree} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}
