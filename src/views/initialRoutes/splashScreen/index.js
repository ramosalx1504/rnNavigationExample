'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import {connect} from 'react-redux';
import {increment} from '../../../data/actions/TestActions';

class SplashScreen extends Component {
  render() {
    return (
      <View>
      	<Text>SplashScreen</Text>
        <Text>{this.props.test.number}</Text>
        <Button title='GO to lang' onPress={()=>{this.props.navigate('lang')}}>

        </Button>
        <Button title='Sirva por favor' onPress={()=>{this.props.increment()}}/>
      </View>
    );
  }
}

const mapStateToProps = ({test}) => ({test});

const styles = StyleSheet.create({

});


export default connect(mapStateToProps,{increment})(SplashScreen);