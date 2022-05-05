import React from 'react';
import axios from 'axios';
// MUI
import { Box } from '@mui/system';
// custom
import AppBarDisplay from './components/AppBarDisplay';
import Container from './components/Container';



function App () {
  return (
    <Box>
      <AppBarDisplay />
      <Container />
    </Box>
  );
}

export default App;
