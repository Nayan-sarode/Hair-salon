import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogin: false,
  role: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReducer(state, action) {
      return { ...state, ...action.payload };
    },
  }
});

export const { userReducer } = userSlice.actions;
export default userSlice.reducer;
