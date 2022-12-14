// import * as React from 'react'
import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Image, SafeAreaView } from 'react-native'

import { connect } from 'react-redux'
import { increment, decrement } from 'redux/actions/counter'
const mapStateToProps = state => {
  return {
    num: state.counter.num,
  }
}

class MyCenterScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.centerBox}>
          <Text>个人中心</Text>
          <Text>类组件</Text>
          <Image style={styles.imageStyle} source={require('@assets/images/duban.png')} />
          <Button title={'加运算'} onPress={() => this.props.increment(1)} />
          <Text style={styles.fontSize30}>状态管理num：{this.props.num}</Text>
          <Button title={'减运算'} onPress={() => this.props.decrement(1)} />
        </View>
      </SafeAreaView>
    )
  }
}

export default connect(mapStateToProps, { increment, decrement })(MyCenterScreen)

const styles = StyleSheet.create({
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize30: {
    fontSize: 30,
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
})
