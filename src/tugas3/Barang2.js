import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Barang2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            jumlah: 0,
        }
    }

    handleTambah = () => {
        this.setState({jumlah: this.state.jumlah +1})
      }

    handleKurang = () => {
        this.setState({jumlah: this.state.jumlah -1})
        if (this.state.jumlah > 0) {
            
        
            } else {
             alert("Jumlah Tidak Boleh Kurang Dari 0, BAMBANK !!");
           }
    }  

    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 60}}>
                <View style={{marginBottom: 30}}>
                    <Text>jumlah: {this.state.jumlah}</Text>
                </View>
                <Text style={{fontSize: 21}}>Silahkan Tekan Tombol Dibawah</Text>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.buttonPlus} onPress={this.handleTambah}>
                        <Text style={styles.plus}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonMinus} onPress={this.handleKurang}>
                        <Text style={styles.minus}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 55, color: 'blue', marginVertical: 30}}>{this.state.jumlah}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonPlus: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40,
        margin: 30
    },
    buttonMinus: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40,
        margin: 30
    },
    plus: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    minus: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})
