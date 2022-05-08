import React, { useEffect, useState } from 'react';
// redux
import {  useDispatch, useSelector } from 'react-redux'
import { updateItems, setReload } from './redux/itemSlice';
// MUI
import { Box } from '@mui/system';
// utils
import dataUtility from './utilities/dataUtility';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import ContainerToggle from './components/ContainerToggle';

function App () {
  const dispatch = useDispatch(); // for dispatching actions
  const [isLoading, setIsLoading] = useState(false); // for loading indicator
  const reload = useSelector(state => state.items.reload); // for refreshing state

  const getItems = async () => { 
    await dataUtility('get', '/items')
      .then((res) => {
        if (res.status === 200) { 
          dispatch(updateItems(res.data.data)); // dispatch action to update items
          setIsLoading(false); // set loading indicator to false
          dispatch(setReload(false)); // set reload to false
        } else {
          console.log('error')
          // display error
        }
      });
    };

  useEffect(() => {
      getItems(); // get items on mount
  }, [reload]);

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
