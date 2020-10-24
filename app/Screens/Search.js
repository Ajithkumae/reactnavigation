import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.continer}>
        <Text> Search </Text>
      </View>
    );
  }
}
const styles=StyleSheet.create({

    continer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})