import React from 'react';
import {View} from 'react-native';
import AppWithNavigationState from './src/AppWithNavigationState';

const RootComponent = (props) => {
	return (
		<View style={{paddingTop:25,flex:1}}>
			{/*<Provider store={initStore()}>*/}
				<AppWithNavigationState/>
			{/*</Provider>*/}
		</View>
	);
}

export default RootComponent;