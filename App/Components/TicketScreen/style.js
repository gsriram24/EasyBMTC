import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	body: {
		flex: 1
	},
	ticketBusNo: {
		flexDirection: 'row',
		marginTop: 20,
		marginTop: 14
	},
	ticketNumber: {
		alignSelf: 'flex-start',
		textAlign: 'left',
		marginLeft: 20,
		fontSize: 14,
		color: '#575757'
	},
	busNo: {
		marginLeft: 'auto',
		marginRight: 20,
		fontSize: 14,
		color: '#575757'
	},
	activityIndicator: {
		transform: [ { scale: 2 } ],
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	},
	headerContainer: {
		flex: 1.25,
		backgroundColor: '#66db7f',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 8
		},
		shadowOpacity: 0.46,
		shadowRadius: 11.14,

		elevation: 7
	},
	headerText: {
		marginTop: 30,
		color: '#ffffff',
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	bodyContainer: {
		flex: 8.75,
		backgroundColor: '#eaeaea'
	},
	pickerBox: {
		marginTop: 10,
		marginBottom: 10,
		width: 300,
		alignSelf: 'center'
	},

	card: {
		marginTop: 40,
		width: 350,
		alignSelf: 'center'
	},
	footerContainer: {
		flex: 0.8,
		flexDirection: 'row'
	},
	backButton: {
		flex: 1,
		alignItems: 'center'
	},
	payButton: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#cacaca'
	},
	backText: {
		flex: 1,
		textAlignVertical: 'center',
		fontSize: 16,
		color: '#575757'
	},
	payText: {
		flex: 1,
		textAlignVertical: 'center',
		fontSize: 16,
		color: '#fff'
	},
	ticket: {
		fontSize: 16,
		color: '#575757',
		alignSelf: 'flex-start'
	},
	ticketRight: {
		fontSize: 16,
		color: '#575757',
		marginLeft: 'auto'
	},
	fareRight: {
		fontSize: 20,
		color: '#575757',
		marginLeft: 'auto',
		fontWeight: '500'
	},
	totalFare: {
		fontSize: 16,
		color: '#575757'
	},
	ticketBox: {
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		width: 300,
		alignSelf: 'center'
	}
});
