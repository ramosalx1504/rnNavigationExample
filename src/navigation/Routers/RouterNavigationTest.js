import { StackNavigator } from 'react-navigation';

import chat from '../../views/Contents/chat';
import map from '../../views/Contents/map';
import profile from '../../views/Contents/profile';
import today from '../../views/Contents/today';


export default StackNavigator({
	chat : {
		screen : chat
	},
	map : {
		screen : map
	},
	today : {
		screen : today
	},
	profile : {
		screen : profile
	}
},{

});