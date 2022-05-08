import React from 'react'
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';


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
      display: 'flex',
      alignItems: 'center',
    }}>
      <Checkbox
        {...label}
        onClick={handleChecked}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography sx={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}>
          {item.name}
        </Typography>
        <Typography>
          {item.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Item