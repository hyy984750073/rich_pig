import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { increment, decrement } from 'redux/actions/counter.js'
import store from '@store/store.js'

function ReduxScreen({ route }) {
  const { title } = route.params
  const num = useSelector(state => {
    return state.counter.num
  })
  // console.log(store)

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  React.useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => setData(json.movies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [])
  return (
    <View style={styles.centerBox}>
      <Text style={styles.fontSize30}>{title}</Text>
      <Text style={styles.fontSize30}>函数组件2</Text>
      <Button title="加加" onPress={() => store.dispatch(increment(1))} />
      <Text style={styles.fontSize30}>状态管理num：{num}</Text>
      <Button title="减减" onPress={() => store.dispatch(decrement(1))} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
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
