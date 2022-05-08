import React, { useState } from 'react'
// MUI
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
// custom
import Item from './Item'
import AddItemModal from './AddItemModal';
import { Typography } from '@mui/material';

export default function ContainerHydrated({
  items,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const itemsList = items.map((item) => {
    return <Item key={item.id} item={item} />
  })
  
  return (
    <Box sx={{
      width: '70vw',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
      }}>
        <Typography sx={{
          fontSize: '1.5rem',
        }}>
          Your Items
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          >
          Add Item
        </Button>
      </Box>
      {itemsList}

      <AddItemModal
        open={open}
        handleClose={handleClose}
      />
    </Box>
  )
}