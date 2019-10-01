import QRScreen from '../QRScreen';
import BusTicketSwitchNavigator from '../Navigators/BusTicketSwitchNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
	QRScreen: {
		screen: QRScreen,
		navigationOptions: {
			header: null
		}
	},
	BusTicketSwitchNavigator: {
		screen: BusTicketSwitchNavigator,
		navigationOptions: {
			header: null
		}
	}
});

const QRSwitchNavigator = createAppContainer(AppNavigator);
export default QRSwitchNavigator;
