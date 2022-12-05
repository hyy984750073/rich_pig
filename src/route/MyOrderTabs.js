import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
function MyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyOrderTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="全部" component={MyScreen} />
      <Tab.Screen name="待付款" component={SettingsScreen} />
      <Tab.Screen name="待发货" component={SettingsScreen} />
      <Tab.Screen name="待收货" component={SettingsScreen} />
      <Tab.Screen name="待评价" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// 实现swiper切换
export default MyOrderTabs;