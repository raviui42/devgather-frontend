import { createSlice } from "@reduxjs/toolkit";

const connectionReducer = createSlice({
    name: 'connection',
    initialState: [],
    reducers: {
        addConnection: (state, action) => {
            return action.payload;
        },
        clearConnection: (state) => null
    }
})

export const { addConnection, clearConnection } = connectionReducer.actions;
export default connectionReducer.reducer;