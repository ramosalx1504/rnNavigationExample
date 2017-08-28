import SplashScreen from '../views/initialRoutes/splashScreen';
import SelectLanguage from '../views/initialRoutes/selectLanguage';
import TipsWizzard from '../views/initialRoutes/tipsWizzard';

module.exports = {
	tabsHome: {

	},
	initialStack: {
		splash : SplashScreen,
		tips : TipsWizzard,
		lang : SelectLanguage
	}
};