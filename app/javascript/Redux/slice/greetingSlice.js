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
