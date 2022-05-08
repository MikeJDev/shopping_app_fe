import React, { useState } from 'react'
// MUI
import { Box } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { Typography, IconButton} from '@mui/material';
// custom
import EditItemModal from './EditItemModal';
import DeleteItemModal from './DeleteItemModal';

function Item({
  item,
}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked, setChecked] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <>
      <Box sx={{
        border: '1px solid grey',
        height: '7rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: checked ? '#f5f5f5' : '#fff',
        padding: '0 1rem',
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
          <IconButton  onClick={handleOpenEdit}>
            <div className="material-icons">edit</div>
          </IconButton>
          <IconButton onClick={handleOpenDelete}>
            <div className="material-icons">delete</div>
          </IconButton>
        </Box>
      </Box>
      <EditItemModal
        open={openEdit}
        handleClose={handleCloseEdit}
        item={item}
      />
      <DeleteItemModal
        open={openDelete}
        handleClose={handleCloseDelete}
        id={item.id}
      />
    </>
  )
}

export default Item