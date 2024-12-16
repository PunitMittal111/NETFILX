import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tvShows: [], 
  tvShowsList: [],
  selectedTvShow: null,
  loading: false, 
  error: null,
};

export const fetchTvShows = createAsyncThunk(
    'tvShows/fetchTvShows',
    async (_, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem('token');
        // console.log(token)
        const response = await axios.get('http://localhost:3000/api/v1/tvShows', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.data.tvShows;
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || 'Failed to fetch TV shows'
        );
      }
    }
  );
  
  export const fetchTvShowById = createAsyncThunk(
    'tvShows/fetchTvShowById',
    async ({ id, token }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/tvShows/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data.data.tvShows;
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || 'Failed to fetch TV show'
        );
      }
    }
  );

const tvShowSlice = createSlice({
  name: 'tvShows',
  initialState,
  reducers:{
    toggleTvShowInList: (state, action) => {
      const tvShow = action.payload;
      const index = state.tvShowsList.findIndex((show) => show.id === tvShow.id);
      if (index > -1) {
        state.tvShowsList.splice(index, 1); // Remove the show
      } else {
        state.tvShowsList.push(tvShow); // Add the show
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTvShows.fulfilled, (state, action) => {
        state.tvShows = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTvShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTvShowById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTvShowById.fulfilled, (state, action) => {
        state.selectedTvShow = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTvShowById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleTvShowInList } = tvShowSlice.actions;
export default tvShowSlice.reducer;