import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';

export default class index extends Component {
    // const [value, onChangeText] = React.useState('Useless Placeholder');
    render() {
        return (
            <View style={[styles.h1, styles.container]}>
                <Text>Hello World</Text>
                <TextInput
                    placeholder='请输入用户名'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                />
                <TextInput
                    placeholder='请输入密码'
                    style={[styles.input]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        width: Dimensions.get('window').width - 20,
        borderColor: 'red',
        borderWidth: 1
    }
})
