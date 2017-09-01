import SplashScreen from '../views/initialRoutes/splashScreen';
import SelectLanguage from '../views/initialRoutes/selectLanguage';
import TipsWizzard from '../views/initialRoutes/tipsWizzard';
import MiStack from './Containers/InitialContainer.js';

module.exports = {
	tabsHome: {

	},
	initialStack: {
		splash : SplashScreen,
		tips : TipsWizzard,
		lang : SelectLanguage,
		home : MiStack
	}
};