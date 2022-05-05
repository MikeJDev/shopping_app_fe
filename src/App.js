import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { updateItems } from './redux/itemSlice';
// MUI
import { Box } from '@mui/system';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import Container from './components/Container';
import dataUtility from './utilities/dataUtility';

function App () {
  const dispatch = useDispatch(); // for dispatching actions

  const getItems = async () => {
    console.log('in here  ')
    await dataUtility('get', '/items')
      .then((res) => {
        if (res.status === 200) {
          dispatch(updateItems(res.data.data))
        } else {
          console.log('error')
          // display error
        }
      });
    };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Box>
      <AppBarDisplay />
      <Container />
    </Box>
  );
}

export default App;
