import React, {Component} from 'react';
import {Text, View, StatusBar, StyleSheet, Button} from 'react-native';
import Barang from './src/tugas2/Barang'
import Barang2 from './src/tugas3/Barang2'
import Header2 from './src/tugas3/Header2'
import Header from './src/components/Header';
import Footer from './src/components/Footer';

class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <StatusBar backgroundColor='blue'/>
      <Header2  data="SELAMAT DATANG" />
      <Barang2/>
    </View>
  );
  }
}

export default App

const styles = StyleSheet.create({

})
