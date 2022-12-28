import React, { useState } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item6',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item5',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item4',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Third Item1',
  },
]
const data2 = [
  {
    id: '1',
    title: '张三',
  },
  {
    id: '2',
    title: '李四',
  },
  {
    id: '3',
    title: '王五2',
  },
  {
    id: '33',
    title: '王五3',
  },
  {
    id: '4',
    title: '王五4',
  },
  {
    id: '5',
    title: '王五5',
  },
  {
    id: '6',
    title: '王五6',
  },
  {
    id: '7',
    title: '王五7',
  },
  {
    id: '8',
    title: '王五8',
  },
  {
    id: '9',
    title: '王五9',
  },
]

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default function OrderListScreen() {
  const renderItem = ({ item }) => <Item title={item.title} />

  const [isFreshing, setFreshing] = useState(false)
  const [datasource, setDatasource] = useState(DATA)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datasource}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={isFreshing}
        onRefresh={() => {
          setFreshing(true)
          console.log('下拉刷新')
          setDatasource(data2)
          setTimeout(() => {
            setFreshing(false)
          }, 1500)
        }}
        onEndReachedThreshold={0.5}
        onEndReached={info => {
          console.log('上拉加载')
          setDatasource([...DATA, ...data2])
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
