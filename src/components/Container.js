import React from 'react'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

function Container() {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <Box sx={{
        border: '1px solid #ccc',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        paddingLeft: '10rem',
        paddingRight: '10rem',
        borderRadius: '.5rem',
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
      }}>
        Your shopping list is empty :
        <Button sx={{
          marginTop: '1rem',
        }}
          variant="contained">Add your first item
        </Button>
      </Box>
    </Box>
  )
}

export default Container