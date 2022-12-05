import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../views/HomeScreen.js'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <AntDesign name="home" size={30} color={'#FF0000'} />
      <Ionicons name="ios-notifications-outline" size={30} color={'#ff0000'} />
      <MaterialCommunityIcons name="timer-settings-outline" size={30} color={'#ff0000'} />
      <MaterialIcons name="add-alarm" size={30} color={'#ff0000'} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'access-time'
              : 'access-time';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'access-alarm' : 'access-alarm';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  )
}

export default MyBottomTabs;