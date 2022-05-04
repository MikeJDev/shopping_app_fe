import React from 'react';
import axios from 'axios';
// MUI
import { Box } from '@mui/system';
// utils
import dataUtility from './utilities/dataUtility';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import Container from './components/Container';



function App () {
  // const baseUrl = 'http://localhost:3000';
  // axios.get(`${baseUrl}/items`)
  //   .then((res) => {
  //   console.log('res:', res.data)
  //   })
    
  return (
    <Box>
      <AppBarDisplay />
      <Container />
    </Box>
  );
}

export default App;
