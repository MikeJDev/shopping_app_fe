import  React, { useState } from 'react';
// MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
// utils
import dataUtility from '../utilities/dataUtility';
//custom 
import TextBox from './TextBox';
import AutoCompleteField from './AutoCompleteField';
// redux
import { useDispatch } from 'react-redux'
import { setReload, setSnackbar } from '../redux/itemSlice';

export default function AddItemModal({
  open,
  handleClose,
}) {
  const dispatch = useDispatch(); // for dispatching actions
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [nameError, setNameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [quantityOptions] = useState([
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
  ]);

  const handleSnackbar = (snack) => {
    dispatch(setSnackbar(snack));
  };

  const validate = () => {
    // validate name and quantity are not empty
    setNameError(false);
    setQuantityError(false);
    if (name === '') {
      setNameError(true);
      return true;
    } else if (quantity === 0) {
      setQuantityError(true);
      return true;
  }
  return false;
  }


  const saveItem = async () => {
    const isValid = validate();
    if (isValid) {
      handleSnackbar({
        open: true,
        action: 'warning',
        message: 'Please fill in required fields',
      });
      return;
    }
    const item = {
      name,
      description,
      quantity,
      isPurchased: false,
    };
    await dataUtility('post', '/items', item)
      .then((res) => {
      if (res.status === 200) {
        dispatch(setReload(true)); // set reload to true
        handleClose();
      } else {
        if (res.status === 500) {
          handleSnackbar({
            open: true,
            action: 'error',
            message: 'Unable to save item, please refresh and try again later.',
          });
        }
      }
      });
  }


  return (
    <Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"SHOPPING LIST"}
        </DialogTitle>
        <DialogContent sx={{
          marginBottom: '10rem',
        }}>
          <Typography sx={{
            fontSize: '1.2rem',
          }}>
            Add an item
          </Typography>
          <DialogContentText id="alert-dialog-description" sx={{
            marginBottom: '1rem',
          }}>
            Add your new item below
          </DialogContentText>
          <TextBox
            label="Item Name"
            setText={setName}
            multiline={false}
            error={nameError}
            helperText={nameError ? 'Please enter a name' : null}
          />
          <TextBox
            label="Description"
            setText={setDescription}
            multiline={true}
            value={description}
            showCharacterCount
          />
          <AutoCompleteField
            label={'How Many?'}
            options={quantityOptions}
            setValue={setQuantity}
            helperText={quantityError ? 'Please enter a quantity' : null}
            error={quantityError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={saveItem} autoFocus variant="contained">
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
