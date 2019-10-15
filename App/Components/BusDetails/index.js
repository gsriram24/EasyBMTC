import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert, StatusBar, TouchableOpacity } from 'react-native';
import styles from './style.js';
import ModalSelector from 'react-native-modal-selector';
import CardView from 'react-native-cardview';
import NumericInput from 'react-native-numeric-input';
import LinearGradient from 'react-native-linear-gradient';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			from: 0,
			to: 0,
			numberAdults: 0,
			numberChildren: 0,
			numberSC: 0,
			fare: 0
		};
	}

	componentDidMount() {
		StatusBar.setBarStyle('light-content', true);
		StatusBar.setBackgroundColor('#50c96a');
		return fetch('https://easybmtc.herokuapp.com/api/v1/busses/' + this.props.navigation.state.params.number)
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					isLoading: false,
					details: responseJson.data.bus
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
	calculateFare = () => {
		const adult = [
			0,
			5,
			9,
			12,
			15,
			16,
			16,
			17,
			18,
			20,
			20,
			20,
			21,
			21,
			21,
			21,
			22,
			22,
			22,
			23,
			23,
			23,
			24,
			24,
			24,
			26,
			26,
			26,
			27,
			27,
			27,
			28,
			28,
			28,
			29,
			29,
			29,
			30,
			30,
			30,
			31,
			31,
			31,
			32,
			32,
			32,
			33,
			33,
			33,
			34,
			34,
			34,
			35,
			35,
			35,
			36,
			36,
			36,
			37,
			37,
			37,
			38,
			38,
			38,
			39,
			39,
			39
		];
		const child = [
			0,
			3,
			5,
			6,
			8,
			8,
			8,
			9,
			9,
			10,
			10,
			10,
			11,
			11,
			11,
			11,
			11,
			11,
			11,
			12,
			12,
			12,
			12,
			12,
			12,
			13,
			13,
			13,
			14,
			14,
			14,
			14,
			14,
			14,
			15,
			15,
			15,
			15,
			15,
			15,
			16,
			16,
			16,
			16,
			16,
			16,
			17,
			17,
			17,
			17,
			17,
			17,
			18,
			18,
			18,
			18,
			18,
			18,
			19,
			19,
			19,
			19,
			19,
			19,
			20,
			20,
			20
		];
		const sc = [
			0,
			4,
			7,
			9,
			11,
			12,
			12,
			13,
			14,
			15,
			15,
			15,
			16,
			16,
			16,
			16,
			17,
			17,
			17,
			17,
			17,
			17,
			18,
			18,
			18,
			20,
			20,
			20,
			20,
			20,
			20,
			21,
			21,
			21,
			22,
			22,
			22,
			23,
			23,
			23,
			23,
			23,
			23,
			24,
			24,
			24,
			25,
			25,
			25,
			26,
			26,
			26,
			26,
			26,
			26,
			27,
			27,
			27,
			28,
			28,
			28,
			29,
			29,
			29,
			29,
			29,
			29
		];
		let fromIndex = this.state.from;
		let toIndex = this.state.to;
		let indexDiff = Math.abs(fromIndex - toIndex);
		if (indexDiff == 0) {
			return 0;
		}
		let cost =
			adult[parseInt(indexDiff / 2) + 1] * this.state.numberAdults +
			child[parseInt(indexDiff / 2) + 1] * this.state.numberChildren +
			sc[parseInt(indexDiff / 2) + 1] * this.state.numberSC;
		return cost;
	};
	goBack = () => {
		this.props.navigation.navigate('QRScreen');
	};
	render() {
		if (this.state.isLoading === true) {
			return (
				<View style={styles.body}>
					<ActivityIndicator color="#50c96a" size="large" style={styles.activityIndicator} />
				</View>
			);
		}
		const stopsData = this.state.details.busStops.map((item, index) => {
			return { key: index, label: item };
		});
		console.log(stopsData);
		return (
			<View style={styles.body}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>Journey Details</Text>
					<Text style={styles.headerText}>{this.state.details.busNo}</Text>
				</View>
				<View style={styles.bodyContainer}>
					<CardView cardElevation={4} cardMaxElevation={7} cornerRadius={7} style={styles.card}>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa' }}>From</Text>
							<ModalSelector
								selectStyle={{ borderWidth: 0 }}
								initValueTextStyle={{ color: '#575757' }}
								selectTextStyle={{ color: '#575757' }}
								style={styles.pickerFrom}
								data={stopsData}
								initValue="From"
								onChange={(option) => {
									this.setState({ from: option.key });
								}}
								cancelText="Cancel"
							/>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa' }}>To</Text>
							<ModalSelector
								selectStyle={{ borderWidth: 0 }}
								initValueTextStyle={{ color: '#575757' }}
								selectTextStyle={{ color: '#575757' }}
								style={styles.pickerFrom}
								data={stopsData}
								initValue="To"
								onChange={(option) => {
									this.setState({ to: option.key });
								}}
								cancelText="Cancel"
							/>
						</View>
					</CardView>
					<CardView cardElevation={4} cardMaxElevation={7} cornerRadius={7} style={styles.card}>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa' }}>Adults</Text>
							<NumericInput
								type="up-down"
								onChange={(value) => this.setState({ numberAdults: value })}
								rounded
								containerStyle={{ alignSelf: 'center' }}
								minValue={0}
								inputStyle={{ color: '#575757' }}
							/>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa' }}>Children</Text>
							<NumericInput
								type="up-down"
								onChange={(value) => this.setState({ numberChildren: value })}
								rounded
								containerStyle={{ alignSelf: 'center' }}
								minValue={0}
								inputStyle={{ color: '#575757' }}
							/>
						</View>
						<View
							style={{
								borderBottomColor: '#cacaca',
								borderBottomWidth: 1
							}}
						/>
						<View style={styles.pickerBox}>
							<Text style={{ color: '#bababa' }}>Senior Citizens</Text>
							<NumericInput
								type="up-down"
								onChange={(value) => this.setState({ numberSC: value })}
								rounded
								containerStyle={{ alignSelf: 'center' }}
								inputStyle={{ color: '#575757' }}
								minValue={0}
							/>
						</View>
					</CardView>
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity style={styles.backButton}>
						<Text style={styles.backText} onPress={this.goBack}>
							Back
						</Text>
					</TouchableOpacity>
					<LinearGradient
						colors={[ '#50c96a', '#77e98f' ]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={styles.payButton}
					>
						<TouchableOpacity>
							<Text style={styles.payText}>
								Pay {'\u20B9'}
								{this.calculateFare()}
							</Text>
						</TouchableOpacity>
					</LinearGradient>
				</View>
			</View>
		);
	}
}
