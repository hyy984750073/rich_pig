import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import HelloWorld from './components/HelloWorld.js';
import FlexBox from './components/FlexBox.js';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HelloWorld />
        <FlexBox />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;