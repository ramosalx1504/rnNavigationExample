'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,Button
} from 'react-native';

class TipsWizzard extends Component {
  render() {
    return (
      <View>
      	<Text>TipsWizzard</Text>
        <Button title='GO to HOME' onPress={()=>{this.props.navigate('Home')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default TipsWizzard;