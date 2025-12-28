import { createSlice } from "@reduxjs/toolkit";

const userValue = JSON.parse(localStorage.getItem("userInfo"))

const initialState = {
  value : userValue 
|| 
{
  token : undefined,
  isLogin : false ,
  is_superuser : false,
  is_staff : false,

}
}

const Slice = createSlice({
  name : "user",
  initialState ,
  reducers : {
    userReducer : (state,action )=>{
      state.value = action.payload
      localStorage.setItem("userInfo", 
      JSON.stringify(action.payload)
      )
    }
  }
})

export const {userReducer} = Slice.actions
export default Slice.reducer