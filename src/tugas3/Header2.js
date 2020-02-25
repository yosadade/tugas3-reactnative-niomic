import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Header2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Tugas 3 React Native </Text>
                <Text style={styles.judul}>{this.props.data}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9bab4e',
        width: '100%',
        height: 100,
    },
    title: {
        color: '#FFFFFF'
    },
    judul: {
        fontSize: 22,
        color: 'purple'
    }
})
