import React, { useEffect, useState } from 'react';
// redux
import {  useDispatch, useSelector } from 'react-redux'
import { updateItems, setReload, setSnackbar, setOpenSnackbar } from './redux/itemSlice';
// MUI
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// utils
import dataUtility from './utilities/dataUtility';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import ContainerToggle from './components/ContainerToggle';

const theme = createTheme({
  typography: {
    fontFamily: 'Dosis, Nunito, sans-serif',
    fontSize: 17,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Dosis';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
      `,
    },
  },
});

function App () {
  const dispatch = useDispatch(); // for dispatching actions
  const [isLoading, setIsLoading] = useState(false); // for loading indicator
  const reload = useSelector(state => state.items.reload); // for refreshing state
  const snackbar = useSelector(state => state.items.snackbar); // for snackbar

  const handleSnackbar = (snack) => {
    dispatch(setSnackbar(snack));
  };
  
  const handleCloseSnackbar = () => {
    dispatch(setOpenSnackbar(false));
  }

  const getItems = async () => { 
    await dataUtility('get', '/items')
      .then((res) => {
        if (res.status === 200) {
          dispatch(updateItems(res.data.data)); // dispatch action to update items
          setIsLoading(false); // set loading indicator to false
          dispatch(setReload(false)); // set reload to false
        } else {
          handleSnackbar({
            open: true,
            action: 'error',
            message: 'Unable to get items, please try again later.',
          });
        }
      });
    };

  useEffect(() => {
      getItems(); // get items on mount
  }, [reload]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        backgroundColor: '#fafafa',
      }}>
        <AppBarDisplay />
        <ContainerToggle
          isLoading={isLoading}
        />
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        // onClose={handleClose}
        anchorOrigin={snackbar.anchorOrigin}
        // message={snackbar.message}
        // action="error"
      >
        <Alert severity={snackbar.action} onClose={handleCloseSnackbar}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>

  );
}

export default App;
