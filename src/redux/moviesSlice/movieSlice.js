// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const initialState = {
//   profileData: null, 
//   loading: false,
//   error: null,
//   token: null,
// };

// // /api/v1/movies

// const movieSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserById.fulfilled, (state, action) => {
//         state.profileData = action.payload;
//         state.loading = false;
//         state.error = null;
//       })
//       .addCase(fetchUserById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Failed to fetch user data';
//       });
//   },
// });

// export default movieSlice.reducer;