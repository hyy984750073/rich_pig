import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  let response = {}
  await fetch('https://reactnative.dev/movies.json')
    .then(res => res.json())
    .then(json => (response = json.movies))
    .catch(error => console.error(error))
  return response
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // console.log(action.payload)
      return action.payload
    })
  },
})

export default usersSlice.reducer
