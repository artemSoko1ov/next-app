import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/entities/User';

type LocalUsersState = {
  list: User[];
};

const initialState: LocalUsersState = {
  list: [],
};

export const localUsersSlice = createSlice({
  name: 'localUsers',
  initialState,
  reducers: {
    addLocalUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
  },
});

export const { addLocalUser } = localUsersSlice.actions;
export const localUsersReducer = localUsersSlice.reducer;
