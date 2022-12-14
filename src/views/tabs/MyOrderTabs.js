import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import OrderScreen from '@views/OrderScreen.js'
import ReduxScreen from '@views/ReduxScreen.js'
import ReduxSecondDemo from '@views/ReduxSecondDemo.js'

function MyScreen() {
  return (
    <View style={styles.centerBox}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen({ Navigator, route }) {
  const { title } = route.params
  return (
    <View style={styles.centerBox}>
      <Text>Settings!</Text>
      <Text style={[styles.bigFont]}>{title}</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

function MyOrderTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="全部" component={MyScreen} />
      <Tab.Screen name="待付款" component={OrderScreen} initialParams={{ title: '待付款' }} />
      <Tab.Screen name="待发货" component={ReduxScreen} initialParams={{ title: '待发货' }} />
      <Tab.Screen name="待收货" component={ReduxSecondDemo} initialParams={{ title: '待收货' }} />
      <Tab.Screen name="待评价" component={SettingsScreen} initialParams={{ title: '待评价' }} />
    </Tab.Navigator>
  )
}

// 实现swiper切换
export default MyOrderTabs

const styles = StyleSheet.create({
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigFont: {
    fontSize: 40,
  },
})
