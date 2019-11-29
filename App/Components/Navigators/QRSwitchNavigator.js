import QRScreen from '../QRScreen';
import BusTicketSwitchNavigator from '../Navigators/BusTicketSwitchNavigator';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
	BusTicketSwitchNavigator: {
		screen: BusTicketSwitchNavigator,
		navigationOptions: {
			header: null
		}
	},
	QRScreen: {
		screen: QRScreen,
		navigationOptions: {
			header: null
		}
	}
});

const QRSwitchNavigator = createAppContainer(AppNavigator);
export default QRSwitchNavigator;
