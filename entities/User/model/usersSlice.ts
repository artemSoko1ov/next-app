import { User } from '@/entities/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UsersState = {
  list: User[];
  isLoading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  list: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    requestUsersStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    requestUsersSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    requestUsersError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.list.push(action.payload);
    },
  },
});

export const { requestUsersStart, requestUsersSuccess, requestUsersError, addUser } =
  usersSlice.actions;

export const usersReducer = usersSlice.reducer;
