import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert, StatusBar } from 'react-native';
import styles from './style.js';
import ModalSelector from 'react-native-modal-selector';
import CardView from 'react-native-cardview';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
		StatusBar.setBarStyle('light-content', true);
		StatusBar.setBackgroundColor('#50c96a');
		return fetch(
			'https://easybmtc.herokuapp.com/api/v1/busses/' + /*this.props.navigation.state.params.number*/ 'KA01F4340'
		)
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
				</View>
				<View style={styles.footerContainer} />
			</View>
		);
	}
}
