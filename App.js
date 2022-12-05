import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyBottomTabs from './src/route/MyBottomTabs.js'

export default function App() {
  return (
    <NavigationContainer>
      <MyBottomTabs />
    </NavigationContainer>
  );
}