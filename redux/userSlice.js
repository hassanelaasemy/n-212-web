import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

// Async thunk to fetch user
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const token = localStorage.getItem("token"); // Use localStorage instead of AsyncStorage
  const response = await axios.get(`${BASE_URL}/api/client`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data[0];
});

// Redux slice for user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
