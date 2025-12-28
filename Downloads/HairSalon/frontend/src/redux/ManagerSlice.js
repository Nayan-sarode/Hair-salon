import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "user",
    initialState: {
        value: []
    },
    reducers: {
        addManager: (state, action) => {
            state.value = action.payload
        },
        managerList: (state, action) => {
            state.value = action.payload
        },
        deleteList : (state, action) => {
            state.value = action.payload
        }
    }

})

export const { addManager, managerList ,deleteList} = slice.actions
export default slice.reducer
