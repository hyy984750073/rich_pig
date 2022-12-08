// import * as React from 'react'
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

import { connect } from 'react-redux'
import { increment, decrement } from '@store/actions/Counter'
const mapStateToProps = state => {
  return {
    num: state.Counter.num,
  }
}

// function MyCenterScreen() {
class MyCenterScreen extends Component {
  render() {
    const ppp = this.props
    console.log(ppp)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>个人中心</Text>
        <Text>-----------------</Text>
        <Button title={'加运算'} onPress={() => this.props.increment(1)} />
        <Text>{this.props.num}</Text>
        <Button title={'减运算'} onPress={() => this.props.decrement(1)} />
      </View>
    )
  }
}

export default connect(mapStateToProps, { increment, decrement })(MyCenterScreen)
