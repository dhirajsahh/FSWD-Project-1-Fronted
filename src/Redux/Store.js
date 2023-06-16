import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "../Redux/slices/TodoSlice";
import userdetails from "../Redux/slices/UserSlice";
export default configureStore({
  reducer: {
    messageSlice,
    user: userdetails,
  },
});
