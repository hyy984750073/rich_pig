import * as React from 'react'
import { Text, View, Button, StyleSheet, Image, SafeAreaView } from 'react-native'

const Statics = ({ name, num }) => {
  return (
    <View style={[styles.rowDirection, styles.marginLeft20, { marginTop: 12 }]}>
      <Text style={styles.staticNum}>{num}</Text>
      <Text>{name}</Text>
    </View>
  )
}

function MyCenterScreen() {
  return (
    <SafeAreaView>
      <View style={[styles.avatarBox]}>
        <Image style={styles.avatar} source={require('@assets/images/duban.png')} />

        <View style={styles.introBox}>
          <Text style={styles.nickname}>Pumpkin</Text>
          <Text>ID: 123456789</Text>
        </View>

        <View style={[styles.rowDirection]}>
          <Statics name="获赞" num={23} />
          <Statics name="消息" num={66} />
          <Statics name="关注" num={18} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MyCenterScreen

const styles = StyleSheet.create({
  avatarBox: {
    marginTop: 50,
    // marginLeft: 10,
    // marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize30: {
    fontSize: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginTop: -40,
    marginLeft: 20,
  },
  introBox: {
    flexDirection: 'row',
  },
  nickname: {
    marginRight: 36,
    fontWeight: 'bold',
  },
  staticNum: {
    fontWeight: 'bold',
    color: '#333',
    marginRight: 2,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  marginLeft20: {
    marginRight: 26,
  },
})
