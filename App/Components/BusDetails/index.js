import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoading: true };
	}

	componentDidMount() {
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
	render() {
		if (this.state.isLoading === true) {
			return (
				<View>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<View>
				<Text> {this.state.details.busReg} </Text>
			</View>
		);
	}
}
