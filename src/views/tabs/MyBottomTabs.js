import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../HomeScreen.js'
import MyCenterScreen from '../myCenter/index.js'
import SettingsScreen from '../SettingsScreen.js'

const Tab = createBottomTabNavigator()

function MyBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === '首页') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          } else if (route.name === '设置') {
            iconName = focused ? 'ios-hammer' : 'ios-hammer-outline'
          } else if (route.name === '我的') {
            iconName = focused ? 'md-person-sharp' : 'md-person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="设置" component={SettingsScreen} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="我的" component={MyCenterScreen} />
    </Tab.Navigator>
  )
}

export default MyBottomTabs
