'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class SelectLanguage extends Component {
  render() {
    return (
      <View>
      	<Text>SelectLanguage</Text>
        <Button title='GO to tips' onPress={()=>{this.props.navigate('tips')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default SelectLanguage;