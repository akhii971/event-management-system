import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load user from localStorage safely
const loadUser = () => {
  try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
};

const initialUser = loadUser();

const slice = createSlice({
  name: "login",
  initialState: {
    user: initialUser,
    isLoggedIn: !!initialUser,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = slice.actions;
export default slice.reducer;
