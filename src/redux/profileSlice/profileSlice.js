import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import Cookies from 'js-cookie';

const initialState = {
  profileData: null, 
  loading: false,
  error: null,
  token: null,
};

export const fetchUserById = createAsyncThunk(
  "profile/fetchUserProfile",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/users/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Cookies.set("Token", response.data.token);
      // Cookies.set("UserId", userId);
      localStorage.setItem(
        "profile",
        JSON.stringify(response.data.data.user)
      );
  
      return response.data.data.user;
    } catch (error) {
      console.log("Error: ", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch user data';
      });
  },
});

export default profileSlice.reducer;