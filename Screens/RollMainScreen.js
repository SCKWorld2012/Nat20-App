import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { roll, getLastRole } from '../store/rolls';

function Test(props) {
	const dispatch = useDispatch();
	const lastRoll = useSelector(getLastRole());
	const rollTheDice = () => {
		dispatch(roll(6, 1, 0));
	};
	return (
		<View style={styles.container}>
			<Button title='Roll 1D6!' onPress={() => rollTheDice()}></Button>
			<Text>{lastRoll.result ? lastRoll.result : '-'}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
});

export default Test;
