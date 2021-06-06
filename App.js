import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import AppNavigator from './navigation/AppNavigator';

export default function App() {
	const store = configureStore();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigator></AppNavigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
