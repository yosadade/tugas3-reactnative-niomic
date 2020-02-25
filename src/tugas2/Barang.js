import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Alert} from 'react-native';

class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaBarang: "",
      jumlahBarang: "",
      namabelanja: "================ Total Belanja ================",
      statusRendering: false,
      jumlah: 0
    };
}

componentDidMount(){
}

namaBarang = () => {
    return (
        <View>
            <TextInput 
            onChangeText={this.handleInputNamaBarang} 
            placeholder='Masukkan Nama Barang'
            value={this.state.namaBarang}/>
        </View>
    )
}

jumlahBarang = () => {
    return (
        <View>
            <TextInput 
            onChangeText={this.handleInputJumlahBarang} 
            placeholder='Masukkan Jumlah Barang'
            value={this.state.jumlahBarang}
            keyboardType='numeric'/>
        </View>
    )
}

handleInputNamaBarang = (event) => {
    this.setState({namaBarang:event})
  }
  
handleInputJumlahBarang = (event) => {
    this.setState({jumlahBarang:event})
}

handleTambah = () => {
  this.setState({jumlah: this.state.jumlah +1})
}

  render() {
    return (
      <View style={styles.container}>
        {this.state.statusRendering === true ? (
          <Text>Selamat Datang</Text>)
        :(
          <Text>Selamat Jalan</Text>
        )}
        <Text style={styles.title}>Tugas React Native 2</Text>
        {this.namaBarang()}
        {this.jumlahBarang()}
        <Text style={styles.title}>{this.state.namabelanja}</Text>
        <Text>Nama Barang : {this.state.namaBarang}</Text>
        <Text>Jumlah Barang : {this.state.jumlahBarang}</Text>
        <Button title='Button Tambah' onPress={this.handleTambah}/>
        <Text>Jumlah: {this.state.jumlah}</Text>
      </View>
    );
  }
}



export default Barang

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 30
    }
})
