import React, { Component } from 'react';

import App from './TabsHomeRouter';

import { StackRouter } from 'react-navigation';

import { tabsHome, initialStack } from '../RoutingConfig';

const StackRoute = StackRouter({
  splash : { screen: initialStack.splash},
  tips : { screen: initialStack.tips},
  lang : { screen: initialStack.lang},
  Home: {
    screen: App,
  }
}, {
  contentOptions: {
    activeTintColor: '#e91e63',
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});


class StackContentNavigator extends Component {

  static defaultProps = {
    active: 'splash'
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      active: 'splash',
    };
  }

  //this method will not get called first time
  componentWillReceiveProps(newProps){
    this.setState({
      active: newProps.value.active,
    }); 
  }

  navigate(active){
    this.setState({
      active:active
    });
  }

  render() {
    const Component = StackRoute.getComponentForRouteName(this.state.active);
    return <Component navigate={this.navigate.bind(this)}/>;
  }
}

export default StackContentNavigator;