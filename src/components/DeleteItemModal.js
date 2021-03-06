import  React from 'react';
// MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
// utils
import dataUtility from '../utilities/dataUtility';
// redux
import { useDispatch } from 'react-redux'
import { setReload } from '../redux/itemSlice';


export default function DeleteItemModal({
  open,
  handleClose,
  id,
}) {
  const dispatch = useDispatch(); // for dispatching actions

  const deleteItem = async () => {
    await dataUtility('delete', `/${id}`)
      .then((res) => {
      if (res.status === 200) {
        dispatch(setReload(true)); // set reload to true
        handleClose();
      }
      });
  }

  return (
    <Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              marginBottom: '1rem',
            }}>
              Are you sure you want to delete this item? This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deleteItem} autoFocus variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
