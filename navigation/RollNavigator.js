import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RollMainScreen from '../Screens/RollMainScreen';

import routes from './routes';

const Stack = createStackNavigator();

const RollNavigator = () => (
	<Stack.Navigator mode='modal' initialRouteName={routes.ROLL_MAIN_SCREEN}>
		<Stack.Screen
			name={routes.ROLL_MAIN_SCREEN}
			component={RollMainScreen}
		/>
	</Stack.Navigator>
);

export default RollNavigator;
