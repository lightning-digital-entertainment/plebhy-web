import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const dedupUsers = [...new Set([...state.users, action.payload])];
      state.users = dedupUsers;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
