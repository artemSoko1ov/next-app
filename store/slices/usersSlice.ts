// store/slices/usersSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 1️⃣ Асинхронное действие — получить пользователей с API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
})

// 2️⃣ Начальное состояние
interface User {
  id: number
  name: string
  phone: string
}

interface UsersState {
  list: User[]
  loading: boolean
}

const initialState: UsersState = {
  list: [],
  loading: false,
}

// 3️⃣ Слайс — функции изменения состояния
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false
      })
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice.reducer