import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  reload: false,
}

export const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    updateItems: (state, action) => {
      state.value = action.payload
    },
    setReload: (state, action) => {
      state.reload = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateItems, setReload } = itemSlice.actions

export default itemSlice.reducer