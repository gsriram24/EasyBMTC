/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusDetails from '../BusDetails';
import TicketScreen from '../TicketScreen';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
	BusDetails: {
		screen: BusDetails,
		navigationOptions: {
			header: null
		}
	},
	TicketScreen: {
		screen: TicketScreen,
		navigationOptions: {
			header: null
		}
	}
});

const BusTicketSwitchNavigator = createAppContainer(AppNavigator);
export default BusTicketSwitchNavigator;
