import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import QRSwitchNavigator from './App/Components/Navigators/QRSwitchNavigator';

const AppSwitchNavigator = createSwitchNavigator({
	QRSwitchNavigator: QRSwitchNavigator
});
const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;
