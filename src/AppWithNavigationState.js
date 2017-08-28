'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {InitialRouter} from './navigation'

class AppWithNavigationState extends Component {
  render() {
    return (
    	<View style={{flex:1}}>
    		{/*ThemeProvider*/}
    			<InitialRouter />
    		{/*ThemeProvider*/}
    	</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default AppWithNavigationState;