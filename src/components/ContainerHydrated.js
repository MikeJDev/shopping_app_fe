import React, { useState } from 'react'
// MUI
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
// custom
import Item from './Item'
import AddItemModal from './AddItemModal';

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
    <Box>
      <Button
        variant="contained"
        onClick={handleOpen}
      >
        Add Item
      </Button>
      {itemsList}

      <AddItemModal
        open={open}
        handleClose={handleClose}
      />
    </Box>
  )
}