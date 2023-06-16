import { createSlice } from "@reduxjs/toolkit";
const TodoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    message: [],
  },
  reducers: {
    setMessage: (state, action) => {
      if (action.payload) {
        state.message.push(action.payload);
      }
    },
    removeMessage: (state, action) => {
      console.log(action.payload);
      state.message = state.message.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export default TodoSlice.reducer;
export const { setMessage, removeMessage } = TodoSlice.actions;
