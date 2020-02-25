import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      umur: this.props.usia,
      username: '',
      password: ''
    };
}

handleInput = (event) => {
  this.setState({username:event})
}

handleInput2 = (event2) => {
  this.setState({password:event2})
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Login Siakad</Text>
        <Text>{this.state.umur}</Text>
        {/* <TextInput onChangeText={(events)=>{this.setState({username:events})} }/> */}
        <Text>Selamat datang :{this.state.username}</Text>
        <TextInput 
          onChangeText={this.handleInput} 
          placeholder='Masukkan username'
          value={this.state.username}/>
        <Text>password: {this.state.password}</Text>
        <TextInput 
          onChangeText={this.handleInput2} 
          placeholder='Masukkan Password'
          value={this.state.password}/>
      </View>
    );
  }
}

export default Header

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center'
    }
})
