import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';
import {increment} from '../../data/actions/TestActions';

class ChatView extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Chat View
          </Text>
          <Text style={styles.welcome}>
            {this.props.test.number}
          </Text>
          <Button title='INcrement' onPress={()=>{this.props.increment()}}/>
        </View>
    );
  }
};

const mS = ({test})=>({test});

export default connect(mS,{increment})(ChatView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});