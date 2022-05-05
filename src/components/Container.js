import React, { useState } from 'react'
// MUI
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
// custom
import AddItemModal from './AddItemModal';

function Container() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          variant="contained"
          onClick={handleOpen}
        >
          Add your first item
        </Button>
      </Box>
      <AddItemModal
        open={open}
        handleClose={handleClose}
      />
    </Box>
  )
}

export default Container