import * as React from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Ionicons name="ios-logo-snapchat" size={80} color={'#ff0000'} />
    </View>
  )
}

export default SettingsScreen
