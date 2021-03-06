import { create } from 'apisauce';
import backendConnection from '../../config/backendConnection';
import * as actions from '../apiEvents';

const apisauceApi = create({
	baseURL: backendConnection.baseURL,
});

//redux middleware that performs api calls if the corresponding actions are dispatched
const api =
	({ dispatch, getState }) =>
	next =>
	async action => {
		//only process actions that should trigger api calls
		if (action.type !== actions.apiCallBegan.type) return next(action);

		/* const {
			auth: { token = '' },
		} = getState(); */

		const { url, method, params, data, onStart, onSuccess, onError } =
			action.payload;

		//signaling that a api call is about to begin
		if (onStart) dispatch({ type: onStart });

		next(action);

		//signaling that a api call is in progress
		//dispatch(loadingStarted());
		//make a api call to the backend and await the response
		const response = await apisauceApi.any({
			url,
			method,
			params,
			data,
			//headers: { Authorization: token },
		});
		//signaling that the call has ended
		//dispatch(loadingFinished());

		//dispatching a success or failure action, depending on the response
		if (response.ok) {
			dispatch(actions.apiCallSuccess(response.data));
			if (onSuccess) {
				dispatch({ type: onSuccess, payload: response.data });
			}
			return;
		}
		dispatch(actions.apiCallFailed(JSON.stringify(response.originalError)));
		alert(
			'Could not get data from the server. Please try logging out and back in again.'
		);

		if (onError)
			dispatch({
				type: onError,
				payload: JSON.stringify(response.originalError),
			});
	};

export default api;
