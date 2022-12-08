import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { increment, decrement } from 'redux/actions/counter.js'
import store from '@store/store.js'

function ReduxScreen({ route }) {
  const { title } = route.params
  const num = useSelector(state => {
    return state.counter.num
  })
  // console.log(store)
  return (
    <View style={styles.centerBox}>
      <Text style={styles.fontSize30}>{title}</Text>
      <Text style={styles.fontSize30}>函数组件2</Text>
      <Button title="加加" onPress={() => store.dispatch(increment(1))} />
      <Text style={styles.fontSize30}>状态管理num：{num}</Text>
      <Button title="减减" onPress={() => store.dispatch(decrement(1))} />
    </View>
  )
}

export default ReduxScreen

const styles = StyleSheet.create({
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize30: {
    fontSize: 30,
  },
})
