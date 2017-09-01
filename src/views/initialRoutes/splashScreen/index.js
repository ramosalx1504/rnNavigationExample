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
      	<Text style={{margin:15}}> SplashScreen View</Text>

        <Text style={{margin:15}}> Reducer State </Text>

        <Text style={{margin:15,fontSize:20}}> {this.props.test.number}</Text>
        
        <Button title='Increment Action Reducer' onPress={()=>{this.props.increment()}}/>

        <View style={{marginTop:45}} />

        <Button  title='GO to lang' onPress={()=>{this.props.navigate('lang')}}/>
      </View>
    );
  }
}

const mapStateToProps = ({test}) => ({test});

export default connect(mapStateToProps,{increment})(SplashScreen);