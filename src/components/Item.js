import React, { useState } from 'react'
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';


function Item({
  item,
}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
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
        size="small"
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography sx={{
          fontSize: '1rem',
          fontWeight: 'bold',
          textDecoration: checked ? 'line-through' : 'none',
        }}>
          {item.name}
        </Typography>
        <Typography sx={{
          fontSize: '0.8rem',
          color: 'gray',
          textDecoration: checked ? 'line-through' : 'none',
        }}>
          {item.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Item