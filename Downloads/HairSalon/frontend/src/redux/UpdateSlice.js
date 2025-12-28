import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "update",
    initialState: {
        value: undefined
    },
    reducers: {
        updateManager: (state, action) => {
            state.value = action.payload
        },

    }

})

export const { updateManager } = slice.actions
export default slice.reducer
