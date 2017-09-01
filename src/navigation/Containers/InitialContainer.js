import React from 'react';
import MiStackNavigator from '../Routers/RouterNavigationTest';

import{addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

const StackContainer = ({dispatch,stackNav}) => (
	<MiStackNavigator
	    navigation={addNavigationHelpers({
	      dispatch,
	      state:stackNav,
	    })}
	  />
);

const mapStateToProps = ({stackNav})=>({stackNav});

export default connect(mapStateToProps)(StackContainer);



