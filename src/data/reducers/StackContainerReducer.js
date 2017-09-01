import MiStackNavigator from '../../navigation/Routers/RouterNavigationTest';

export default (state,action) => MiStackNavigator.router.getStateForAction(action,state);