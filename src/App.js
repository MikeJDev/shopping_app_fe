import React, { useEffect, useState } from 'react';
import {  useDispatch } from 'react-redux'
import { updateItems } from './redux/itemSlice';
// MUI
import { Box } from '@mui/system';
// utils
import dataUtility from './utilities/dataUtility';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import ContainerToggle from './components/ContainerToggle';
// import { ThemeProvider, createMuiTheme } from '@material-ui/core';

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
//       'Chilanka',
//       'cursive',
//     ].join(','),
//   },});

function App () {
  const dispatch = useDispatch(); // for dispatching actions
  const [isLoading, setIsLoading] = useState(true); // for loading indicator

  const getItems = async () => { 
    await dataUtility('get', '/items')
      .then((res) => {
        if (res.status === 200) { 
          dispatch(updateItems(res.data.data)); // dispatch action to update items
          setIsLoading(false); // set loading indicator to false
        } else {
          console.log('error')
          // display error
        }
      });
    };

  useEffect(() => {
    getItems(); // get items on mount
  }, []); // empty array to only run once

  return (
    // <ThemeProvider theme={theme}>
      <Box>
        <AppBarDisplay />
        <ContainerToggle
          isLoading={isLoading}
        />
      </Box>
    // </ThemeProvider>

  );
}

export default App;
