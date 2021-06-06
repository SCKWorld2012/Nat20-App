import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import routes from './routes';
import RollNavigator from './RollNavigator';
import GroupsNavigator from './GroupsNavigator';

const Tab = createBottomTabNavigator();

//functional component; the main navigator for the app.
//the app uses tabs for navigation. within the tabs stacks are used for nested navigation.
const AppNavigator = () => {
	//useNotifications();
	//	const isLoggedIn = useSelector(authActions.isLoggedIn());
	//	const isLoginExpired = useSelector(authActions.isLoginExpired());

	//in case the user is not logged in or his login has expired show the navigator with the login and register options
	//the user wont see the app navigation until he is logged in
	//	if (!isLoggedIn) return <AuthNavigator />;

	return (
		<Tab.Navigator
			tabBarOptions={{ showLabel: false }}
			initialRouteName={routes.ROLL_MAIN_SCREEN}
		>
			<Tab.Screen
				name={routes.GROUPS_NAVIGATOR}
				component={GroupsNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='group' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={routes.ROLL_NAVIGATOR}
				component={RollNavigator}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name='dice-d20'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
