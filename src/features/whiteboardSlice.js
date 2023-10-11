// module imports
import { createSlice } from "@reduxjs/toolkit";

// initial state of store
const initialState = {
	tool: null,
}

const whiteboardSlice = createSlice({
	name: 'whiteboard',
	initialState,
	reducers: {
		setToolType: (state, action) => {
			state.tool = action.payload
		}
	}
})

// export slice actions
export const { setToolType } = whiteboardSlice.actions;

// default export slice reducers
export default whiteboardSlice.reducer;