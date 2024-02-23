// import { createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   a_greeting: "",
// };

// export const randomgreeting = createAsyncThunk(
//   'fetchgreeting',
//   async () => {
//     const response = await fetch("http://127.0.0.1:3000/api/v1/greetings/index");
//     const data = await response.json(); // Parse response as JSON
//     return data.a_greeting.greeting; // Extract greeting message from response data
//   },
// );

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case randomgreeting.fulfilled:
//       return { ...state, greeting: action.payload };
//     default:
//       return state;
//   }
// };
// Redux/slice/greetingSlice.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const randomGreeting = createAsyncThunk(
  'greetings/fetchRandom',
  async () => {
    const response = await fetch("http://127.0.0.1:3000/api/v1/greetings");
    const data = await response.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(randomGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
      });
  },
});

export default greetingSlice.reducer;
