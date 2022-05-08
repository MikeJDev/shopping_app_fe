import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItems: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateItems } = itemSlice.actions

export default itemSlice.reducer