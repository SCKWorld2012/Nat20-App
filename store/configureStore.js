import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import api from './middleware/api';
import reducer from './reducer';

//function to set up the redux store, including persistion, encryption and middleware
export default function (encryptionKey = 'unsecureKey') {
	return configureStore({
		reducer,
		middleware: [...getDefaultMiddleware(), api],
	});
}
