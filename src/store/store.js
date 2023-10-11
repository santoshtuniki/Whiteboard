/* eslint-disable no-undef */
// module imports
import { configureStore } from '@reduxjs/toolkit';

// component imports
import whiteboardReducer from '../features/whiteboardSlice';

export const store = configureStore({
	reducer: {
		whiteboard: whiteboardReducer,
	},
});
