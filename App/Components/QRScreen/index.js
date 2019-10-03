import React, { Component } from 'react';

import { View, Dimensions, Text } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

console.disableYellowBox = true;

class QrCodeCamera extends Component {
	onSuccess = (e) => {
		this.props.navigation.navigate('BusDetails', { number: e.data });
	};

	makeSlideOutTranslation(translationType, fromValue) {
		return {
			from: {
				[translationType]: SCREEN_WIDTH * -0.18
			},
			to: {
				[translationType]: fromValue
			}
		};
	}

	render() {
		return (
			<QRCodeScanner
				showMarker
				onRead={this.onSuccess}
				cameraStyle={{ height: SCREEN_HEIGHT }}
				customMarker={
					<View style={styles.rectangleContainer}>
						<View style={styles.topOverlay}>
							<Text style={{ fontSize: 24, color: 'white' }}>Please Scan QR</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<View style={styles.leftAndRightOverlay} />

							<View style={styles.rectangle}>
								<Icon name="ios-qr-scanner" size={SCREEN_WIDTH * 0.73} color={iconScanColor} />
								<Animatable.View
									style={styles.scanBar}
									direction="alternate-reverse"
									iterationCount="infinite"
									duration={1700}
									easing="linear"
									animation={this.makeSlideOutTranslation('translateY', SCREEN_WIDTH * -0.54)}
								/>
							</View>

							<View style={styles.leftAndRightOverlay} />
						</View>

						<View style={styles.bottomOverlay} />
					</View>
				}
			/>
		);
	}
}

const overlayColor = 'rgba(0,0,0,0.7)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.62; // this is equivalent to 255 from a 393 device width
const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = '#22ff00';

const iconScanColor = '#50c96a';

const styles = {
	rectangleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},

	rectangle: {
		height: rectDimensions,
		width: rectDimensions,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},

	topOverlay: {
		flex: 1,
		height: SCREEN_WIDTH,
		width: SCREEN_WIDTH,
		backgroundColor: overlayColor,
		justifyContent: 'center',
		alignItems: 'center'
	},

	bottomOverlay: {
		flex: 1,
		height: SCREEN_WIDTH,
		width: SCREEN_WIDTH,
		backgroundColor: overlayColor,
		paddingBottom: SCREEN_WIDTH * 0.25
	},

	leftAndRightOverlay: {
		height: SCREEN_WIDTH * 0.65,
		width: SCREEN_WIDTH,
		backgroundColor: overlayColor
	},

	scanBar: {
		width: scanBarWidth,
		height: scanBarHeight,
		backgroundColor: scanBarColor
	}
};

export default QrCodeCamera;
