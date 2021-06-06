import { combineReducers } from 'redux';
import groups from './groups';
import rolls from './rolls';

//main redux reducer combining all other reducers
export default combineReducers({
	groups,
	rolls,
});
