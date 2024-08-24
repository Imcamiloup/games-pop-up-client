import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  allEvents: [],
  allTypes: [],
};

//reducer and actions for state allProducts changes
const eventsSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
    getValueTypes(state, action) {
      state.allTypes = action.payload;
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { getAllEvents, getValueTypes, getAllUsers } =
  eventsSlice.actions;

export default eventsSlice.reducer;
