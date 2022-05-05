import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: 0,
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItems: (state, action) => {
      state.items = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateItems } = itemSlice.actions

export default itemSlice.reducer