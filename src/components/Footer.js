import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Footer extends Component {

    // state = {
    //     slogan: 'Bersekutu Tambah Mutu',
    //     since: this.props.tahun
    // }

    constructor(props){
        super(props);
        this.state = {
            slogan: 'Bersekutu Tambah Mutu',
            since: this.props.tahun
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> {this.props.tahun} {this.state.slogan} {this.state.since}</Text>
            </View>
        )
    }
}

// Footer = (props) => {
//     return (
//         <View style={styles.container}>
//            <Text> {props.tahun} </Text>
//         </View>
//     )
// }

export default Footer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center'
    }
})

