import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: null,
  email: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USERS: (state, action) => {
      const { email, userName, userID } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
      // console.log("actionnnnnn===============>", action.payload);
    },
    REMOVE_ACTIVE_USER: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
      console.log(state.isLoggedIn);
    },
  },
});

export const { SET_ACTIVE_USERS, REMOVE_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectEmail = (state) => state.auth.email;

export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
