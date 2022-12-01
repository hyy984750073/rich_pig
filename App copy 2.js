import 'react-native-gesture-handler'; // 手势处理  6.x里没看到了
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* 具体的应用代码 */}
//     </NavigationContainer>
//   )
// }

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View>
          <Text> FlexBox </Text>
        </View>
      </NavigationContainer>
    )
  }
}