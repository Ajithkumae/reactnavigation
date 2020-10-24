import React, { Component } from 'react';
import { Mainstack,Stack } from './app/Router/router';
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Mainstack/>
{/* <Stack/> */}
      </NavigationContainer>
    );
  }
}
