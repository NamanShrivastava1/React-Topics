import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("async/fetchUser", async () => {
  const response = await fetch("/api/user");
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
});

const initialState = {
  user: null,
  loading: false,
  error: null,
};
const asyncSlice = createSlice({
  name: "async",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default asyncSlice.reducer;
