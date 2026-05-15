import { createSlice } from "@reduxjs/toolkit";

const feedReducer = createSlice({
    name:'feed',
    initialState: [],
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        clearFeed: (state) => null
    }
})

export const { addFeed, clearFeed } = feedReducer.actions;
export default feedReducer.reducer;