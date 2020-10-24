import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Text> Home </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({

    continer:{
        justifyContent:'center',
        alignContent:"center",
        flex:1
    }
})