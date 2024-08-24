// src/store.js
import { createSlice } from '@reduxjs/toolkit';

// Crear un slice para manejar el estado de isLogged
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;