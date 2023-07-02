import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoItems: [], loading: false, error: null },
  reducers: {
    setItems(state, action) {
      state.todoItems = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;

export const todoActions = todoSlice.actions;