'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View>
      	<Text>SplashScreen</Text>
        <Button title='GO to lang' onPress={()=>{this.props.navigate('lang')}}>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default SplashScreen;