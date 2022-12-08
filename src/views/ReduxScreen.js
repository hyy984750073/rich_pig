import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@store/actions/Counter.js'

function ReduxScreen({ route }) {
  const { title } = route.params
  const dispatch = useDispatch()
  const num = useSelector(state => {
    return state.Counter.num
  })
  return (
    <View style={styles.centerBox}>
      <Text style={styles.fontSize30}>函数组件：{title}</Text>
      <Button title="加加" onPress={() => dispatch(increment(1))} />
      <Text>{num}</Text>
      <Button title="减减" onPress={() => dispatch(decrement(1))} />
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
