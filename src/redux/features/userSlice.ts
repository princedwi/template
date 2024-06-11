import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonData, User } from "../../types/user.types";

const initialState: CommonData = {
  user: { name: "jacobs", isAdmin: false, islogin: false },
};

export const userState = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      const { payload } = action;
      state.user = payload;
    },
  },
});

export const { updateUser } = userState.actions;
export default userState.reducer;
