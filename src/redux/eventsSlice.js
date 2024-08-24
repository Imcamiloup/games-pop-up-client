import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestEvents from "../services/events/requestEvents";

const initialState = {
  allEvents: [],
  allTypes: [],
  loading: false,
  error: null,
  page: 1,
  filters: {},
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async ({ page, filters }, thunkAPI) => {
    try {
      const response = await requestEvents(page, filters);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
    extraReducers: (builder) => {
      builder
        .addCase(fetchEvents.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchEvents.fulfilled, (state, action) => {
          state.loading = false;
          state.events = action.payload;
          state.error = null;
        })
        .addCase(fetchEvents.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  },
});

export const { getAllEvents, getValueTypes, getAllUsers, setPage, setFilters } =
  eventsSlice.actions;

export default eventsSlice.reducer;
