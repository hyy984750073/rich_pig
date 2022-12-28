import * as React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

function SettingsScreen({ screenName, route }) {
  const [count, setCount] = React.useState(0)
  const navigation = useNavigation()

  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  //   navigation.setOptions({
  //     headerRight: () => (
  //       // 会覆盖Stack.Screen的headerRight
  //       <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //     ),
  //   })
  // }, [navigation, route.params?.post])
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Ionicons name="ios-logo-snapchat" size={80} color={'#ff0000'} />
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }}
      />
      <Text>------</Text>
      <Button title="Create post" color="red" onPress={() => navigation.navigate('CreatePost', { name: '写邮件' })} />
      <Text style={[styles.fontSize30, { margin: 10 }]}>Post: {route.params?.post}</Text>

      <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'My home Updated!' })} />
      <Text style={styles.fontSize30}>------</Text>

      {/* <Button title={`Go to ${screenName}`} onPress={() => navigation.navigate(screenName)} /> */}
      <Text>------</Text>

      <Button title={'Click me--Count'} onPress={() => setCount(count + 1)} />
      <Text>You clicked {count} times</Text>

      <Button title={'Go to One'} onPress={() => navigation.navigate('One')} />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  fontSize30: {
    fontSize: 30,
  },
})
