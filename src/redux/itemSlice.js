import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  reload: false,
  snackbar: {
    open: false,
    message: null,
    action: null,
    autoHide: 3000,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
  },
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
    },
    setOpenSnackbar: (state, action) => {
      state.snackbar.open = action.payload;
    },
    setMessage: (state, action) => {
      state.snackbar.message = action.payload;
    },
    setAction: (state, action) => {
      state.snackbar.action = action.payload;
    },
    setSnackbar: (state, action) => {
      if (
        typeof action.payload === 'object'
        && Object.keys(action.payload).length > 0
      ) {
        let index = 0;
        const stateKeys = Object.keys(state.snackbar);
        const payloadKeys = Object.keys(action.payload);
        while (index <= payloadKeys.length) {
          if (stateKeys.includes(payloadKeys[index])) {
            state.snackbar[payloadKeys[index]] = action.payload[payloadKeys[index]];
          }
          index += 1;
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateItems, setReload, setSnackbar, setOpenSnackbar } = itemSlice.actions

export default itemSlice.reducer