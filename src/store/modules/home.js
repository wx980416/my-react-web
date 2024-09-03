import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    number: 0,
  },

  reducers: {
    changeNumber(state, action) {
      state.number = action.payload
    },
  },
})


export const { changeNumber } = homeSlice.actions
export default homeSlice.reducer
