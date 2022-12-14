import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from 'redux/actions/counter.js'
import { fetchUsers } from 'redux/usersSlice.js'
import store from '@store/store.js'

function ReduxScreen({ route }) {
  const { title } = route.params
  const dispatch = useDispatch()
  const num = useSelector(state => state.counter.num)
  const user = useSelector(state => state.user)
  const [isLoading, setLoading] = useState(true)
  // dispatch(fetchUsers()) // 放在这里就会一开始就请求，有点浪费资源
  React.useEffect(() => {
    store.dispatch(fetchUsers())
    // if (user.length) {
    setLoading(false)
    // }
    console.log(Math.random())
  }, [])
  return (
    <View style={styles.centerBox}>
      <Text style={styles.fontSize30}>{title}</Text>
      <Text style={styles.fontSize30}>函数组件</Text>
      <Button title="加加" onPress={() => dispatch(increment(1))} />
      <Text style={styles.fontSize30}>状态管理num：{num}</Text>
      <Button title="减减" onPress={() => dispatch(decrement(1))} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={user}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              啦啦啦啦啦啦：{item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
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
