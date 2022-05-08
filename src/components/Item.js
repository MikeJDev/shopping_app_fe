import React, { useState } from 'react'
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { Typography, IconButton} from '@mui/material';
import EditItemModal from './EditItemModal';

function Item({
  item,
}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <>
      <Box sx={{
        border: '1px solid grey',
        height: '5rem',
        marginBottom: '1rem',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: checked ? '#f5f5f5' : '#fff',
      }}>

        <Box sx={{ // left side
          display: 'flex',
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
            <Typography sx={{ // title
              fontSize: '1rem',
              fontWeight: 'bold',
              textDecoration: checked ? 'line-through' : 'none',
            }}>
              {item.name}
            </Typography>
            <Typography sx={{ // 
              fontSize: '0.8rem',
              color: 'gray',
              textDecoration: checked ? 'line-through' : 'none',
            }}>
              {item.description}
            </Typography>
          </Box>
        </Box>

        <Box> {/* right side */}
          <IconButton  onClick={handleOpen}>
            <div className="material-icons">edit</div>
          </IconButton>
          <IconButton>
            <div className="material-icons">delete</div>
          </IconButton>
        </Box>
      </Box>
      <EditItemModal
        open={open}
        handleClose={handleClose}
        item={item}
      />
    </>
  )
}

export default Item