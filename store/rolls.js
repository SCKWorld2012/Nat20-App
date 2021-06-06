import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiEvents';
import { createSelector } from 'reselect';
import backendConnection from '../config/backendConnection';

const slice = createSlice({
	name: 'rolls',
	initialState: {
		lastRoll: {
			d: '',
			rolls: '',
			mod: '',
			result: '',
		},
		loading: false,
	},
	reducers: {
		rollStarted: (rolls, action) => {
			rolls.loading = true;
		},
		// resolveBug (command) - bugResolved (event)
		rollResolved: (rolls, action) => {
			rolls.loading = false;
			rolls.lastRoll = action.payload;
		},
	},
});

export const { rollResolved, rollStarted } = slice.actions;
export default slice.reducer;

// Action Creators

export const roll = (d, rolls, mod) => (dispatch, getState) => {
	return dispatch(
		apiCallBegan({
			url: backendConnection.rollURL,
			method: 'get',
			params: { d, rolls, mod },
			onStart: rollStarted.type,
			onSuccess: rollResolved.type,
		})
	);
};

export const getLastRole = () =>
	createSelector(
		state => state.rolls,
		rolls => rolls.lastRoll
	);
