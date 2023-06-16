import { createSlice } from "@reduxjs/toolkit";
const UserSlice = createSlice({
  name: "userinformation",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export default UserSlice.reducer;
export const { setEmail, setPassword } = UserSlice.actions;
