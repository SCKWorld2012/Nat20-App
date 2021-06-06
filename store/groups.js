import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiEvents';

const slice = createSlice({
	name: 'groups',
	initialState: {
		list: [],
	},
	reducers: {
		// command - event
		// addBug - bugAdded
		groupAdded: (groups, action) => {
			groups.list.push(action.payload);
		},
	},
});

export const { groupAdded } = slice.actions;
export default slice.reducer;
