import  React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

//custom 
import TextBox from './TextBox';

export default function AddItemModal({
  open,
  handleClose,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  return (
    <Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          {"SHOPPING LIST"}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{
            fontSize: '1.2rem',
          }}>
            Add an item
          </Typography>
          <DialogContentText id="alert-dialog-description">
            Add your new item below
          </DialogContentText>
          <TextBox
            label="Item Name"
            setText={setName}
            multiline={false}
          />
          <TextBox
            label="Description"
            setText={setDescription}
            multiline={true}
            value={description}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus variant="contained">
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
