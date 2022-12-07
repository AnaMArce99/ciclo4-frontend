import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { addInfo } = userSlice.actions

export default userSlice.reducer
