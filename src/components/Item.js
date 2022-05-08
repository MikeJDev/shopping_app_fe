import React from 'react'
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';


function Item({
  item,
}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleChecked = (e) => {
    console.log('checked', e.target.checked);
  }

  return (
    <Box sx={{
      border: '1px solid grey',
      height: '5rem',
      marginBottom: '1rem',
      borderRadius: '3px',
    }}>
      <Checkbox
        {...label}
        onClick={handleChecked}
      />
      {item.name}
    </Box>
  )
}

export default Item