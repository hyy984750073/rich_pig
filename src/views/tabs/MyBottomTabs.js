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

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-hammer' : 'ios-hammer-outline'
          } else if (route.name === 'My') {
            iconName = focused ? 'md-person-sharp' : 'md-person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: '设置', tabBarBadge: 3 }} />
      <Tab.Screen name="My" component={MyCenterScreen} options={{ title: '我的' }} />
    </Tab.Navigator>
  )
}

export default MyBottomTabs
