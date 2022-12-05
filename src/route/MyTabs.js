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

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="我的" component={MyScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="设置2" component={SettingsScreen} />
      <Tab.Screen name="设置3" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// 实现swiper切换
export default MyTabs;