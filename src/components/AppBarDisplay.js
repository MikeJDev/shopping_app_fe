import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AppBarDisplay() {
  return (
    <Box sx={{
      flexGrow: 1,
      marginBottom: '5rem',
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
