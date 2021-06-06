import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RollMainScreen from '../Screens/RollMainScreen';

import routes from './routes';

const Stack = createStackNavigator();

const GroupsNavigator = () => (
	<Stack.Navigator mode='modal' initialRouteName={routes.GROUPS_MAIN_SCREEN}>
		<Stack.Screen
			name={routes.GROUPS_MAIN_SCREEN}
			component={RollMainScreen}
		/>
	</Stack.Navigator>
);

export default GroupsNavigator;
